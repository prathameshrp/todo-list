import "../assets/fonts/stylesheet.css"
import "./style.css"
import { Project } from "./scripts/projectHandler.js";
import { ToDoList } from "./scripts/ListHandler.js";
import placeholderContent, {populateDOM, populateNavigatorList, populateListTask, populateNewProject, populateNewList} from "./scripts/populateDOM.js";

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

populateDOM(ProjectManager.getAllProjects());

// placeholderContent(ProjectManager);

const runApp = (function (doc){
    const addProjectBtn = doc.querySelector("#add-project");

    addProjectBtn.addEventListener("click", (e)=>{
        e.stopPropagation();
        openProjectModal();
    })

    const addListButton = doc.querySelector("#add-list");
    addListButton.addEventListener("click", (e)=>{
        e.stopPropagation();
        openListModal();
    })
})(document);

function openProjectModal()
{
    const projectDialog = document.querySelector("#project-dialog");
    projectDialog.showModal();

    const submitBtn = document.querySelector("#submit-project");
    submitBtn.addEventListener("click", (e)=>
    {
        e.stopPropagation();
    // add project to backend logic:
    
    addNewProject();
    }
    )
}

function addNewProject()
{

//add to array
    const projecNameEle = document.querySelector("#project-title");
    const newProjectName = projecNameEle.value;
    const newProject = new Project(newProjectName);
    
    ProjectManager.addProject(newProject);
    // populateDOM(ProjectManager.getAllProjects());
    // populateNavigatorList(newProject.getLists());
    populateNewProject(newProject, ProjectManager.getAllProjects().length-1);
    const projectDialog = document.querySelector("#project-dialog");
    projectDialog.close();

}

function openListModal()
{
    const listDialog = document.querySelector("#list-dialog");
    listDialog.showModal();

    const submitBtn = document.querySelector("#submit-list");
    submitBtn.addEventListener("click", (e)=>
    {
        e.stopPropagation();
    // add project to backend logic:
    
    addNewList();
    }
    )
    
}

function addNewList()
{

//add to array
    const activeProject = document.querySelector("#add-list").getAttribute("active-project");
    const listNameEle = document.querySelector("#list-title");
    const newListName = listNameEle.value;
    const newList = new ToDoList(newListName);
    const listParentProject = ProjectManager.getAllProjects()[activeProject];
    console.log("This Must be all projects", ProjectManager.getAllProjects());
    console.log("This Must be index I am looking for", activeProject);


    console.log("This Must be project", listParentProject);
    listParentProject.createList(newList);
    // populateDOM(ProjectManager.getAllProjects());
    // populateNavigatorList(newProject.getLists());
    populateNewList(listParentProject.getLists().length -1, newList);

}