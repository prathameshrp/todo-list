import "../assets/fonts/stylesheet.css"
import "./style.css"
import { Project } from "./scripts/projectHandler.js";
import { ToDoList } from "./scripts/ListHandler.js";
import placeholderContent, {populateListTask, populateNewProject, populateNewList, populateNewtask} from "./scripts/populateDOM.js";
import { ToDoTask } from "./scripts/taskHandler.js";

let active_project = 0;
let active_list = 0;
class ProjectManager
{
    static #projectsInStorage = [];
    
    static addProject(projectObj)
    {
        // const newProject = new Project(projectName);
        this.#projectsInStorage.push(projectObj);
    }

    static deleteProject(index)
    {
        this.#projectsInStorage.splice(index, 1);
    }

    static getAllProjects()
    {
        return this.#projectsInStorage;
    }
}


(function insertProjects()
{
    const data = placeholderContent();
    
    data["projects"].forEach(project => {
        
        const projectName = project["name"];
        const newProject = new Project(projectName);

        const lists = project["lists"];

        lists.forEach(list => {
            const listName = list["name"];
            const newList = new ToDoList(listName);
            const tasks = list["tasks"];
            
            tasks.forEach(task => {
                newList.createTask(task["name"], task["description"], task["due_date"], task["priority"]);
            });

            newProject.createList(newList);
        })
        ProjectManager.addProject(newProject);


    });
    // console.log(ProjectManager.getAllProjects());  
})();

function populateDOM(projects)
{
    for(let i = 0; i < projects.length; ++i)
    {
     populateNewProject(projects[i], i);
         // pli.addEventListener("click", ()=>
    //     {populateNavigatorList(project.getLists(), index)})
    }
    // populateNavigatorList(projects[0].getLists());
}
populateDOM(ProjectManager.getAllProjects());

function addEventsToProject(projects)
{
    for(let i = 0; i < projects.length; ++i)
    {
        const projecBtn = document.querySelector(`[project-index='${i}']`);
        projecBtn.addEventListener("click", (e)=>{
            e.stopPropagation();
            populateNavigatorList(projects[i].getLists(), i);
        });
    }
}
addEventsToProject(ProjectManager.getAllProjects());

function populateNavigatorList(lists, projectIndex)
{    
   
    const listNavigator = document.querySelector("#all-lists");
    const addListBtn = document.querySelector("#add-list");
    listNavigator.replaceChildren(addListBtn);
    addListBtn.setAttribute("active-project", projectIndex);
    for(let i = 0; i<lists.length; ++i)
        {
            populateNewList(i, lists[i])

        }
    if(lists.length !=0)
            {
    populateListTask(0, lists[0].getAllTasks());
            }
    else
    {
        return;
    }
}


// placeholderContent(ProjectManager);

// const runApp = (function (doc){
//     const addProjectBtn = doc.querySelector("#add-project");

//     addProjectBtn.addEventListener("click", (e)=>{
//         e.stopPropagation();
//         openProjectModal();
//     })

//     const addListButton = doc.querySelector("#add-list");
//     addListButton.addEventListener("click", (e)=>{
//         e.stopPropagation();
//         openListModal();
//     })


//     const addTaskButton = doc.querySelector("#add-task");
//     addTaskButton.addEventListener("click", (e)=>{
//         e.stopPropagation();
//         openTaskModal();
//     })

//     const submitPBtn = document.querySelector("#submit-project");
//     submitPBtn.addEventListener("click", (e)=>
//     {
//     e.stopPropagation();
//     // add project to backend logic:
//     addNewProject();
//     })

//     const submitLBtn = document.querySelector("#submit-list");
//     submitLBtn.addEventListener("click", (e)=>
//     {
//         e.stopPropagation();
//     // add list to backend logic:
    
//     addNewList();
//     });

//     const submitTBtn = document.querySelector("#submit-task");
//     submitTBtn.addEventListener("click", (e)=>
//     {
//         e.stopPropagation();
//     // add task to backend logic:
    
//     addNewTask();
//     });

// })(document);


// function openProjectModal()
// {
//     const projectDialog = document.querySelector("#project-dialog");
//     projectDialog.showModal();

// }

// function addNewProject()
// {

// //add to array
//     const projecNameEle = document.querySelector("#project-title");
//     const newProjectName = projecNameEle.value;
//     const newProject = new Project(newProjectName);
    
//     ProjectManager.addProject(newProject);
//     // populateDOM(ProjectManager.getAllProjects());
//     // populateNavigatorList(newProject.getLists());
//     populateNewProject(newProject, ProjectManager.getAllProjects().length-1);
//     const projectDialog = document.querySelector("#project-dialog");
//     projectDialog.close();
// }

// function openListModal()
// {
//     const listDialog = document.querySelector("#list-dialog");
//     listDialog.showModal();
    
// }

// function addNewList()
// {

// //add to array
//     const activeProject = document.querySelector("#add-list").getAttribute("active-project");
//     const listNameEle = document.querySelector("#list-title");
//     const newListName = listNameEle.value;
//     const newList = new ToDoList(newListName);
//     const listParentProject = ProjectManager.getAllProjects()[activeProject];
//     console.log("This Must be all projects", ProjectManager.getAllProjects());
//     console.log("This Must be index I am looking for", activeProject);


//     console.log("This Must be project", listParentProject);
//     listParentProject.createList(newList);
//     // populateDOM(ProjectManager.getAllProjects());
//     // populateNavigatorList(newProject.getLists());
//     populateNewList(listParentProject.getLists().length -1, newList);
//     const listDialog = document.querySelector("#list-dialog");
//     listDialog.close();
// }



// function openTaskModal()
// {
//     const taskDialog = document.querySelector("#task-dialog");
//     taskDialog.showModal();
    
// }

// function addNewTask()
// {

// //add to array
//     const activeProject = document.querySelector("#add-list").getAttribute("active-project");
//     const activeList = document.querySelector("#add-task").getAttribute("active-list");
//     const taskNameEle = document.querySelector("#task-title");
//     const taskDescEle = document.querySelector("#task-desc");

//     const newTaskName = taskNameEle.value;
//     const newTaskDesc = taskDescEle.value;;

//     const listParentProject = ProjectManager.getAllProjects()[activeProject];
//     const taskParentList = listParentProject.getLists()[activeList];

//     taskParentList.createTask(newTaskName, newTaskDesc);
//     populateNewtask(taskParentList.getAllTasks().length -1, newTaskName, newTaskDesc);
//     const taskDialog = document.querySelector("#task-dialog");
//     taskDialog.close();
// }