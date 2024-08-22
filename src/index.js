import "../assets/fonts/stylesheet.css"
import "./style.css"
import { Project } from "./scripts/projectHandler.js";
import { ToDoList } from "./scripts/ListHandler.js";
import placeholderContent from "./scripts/populateDOM.js";

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


function insertProjects()
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
    
}
insertProjects();


// placeholderContent(ProjectManager);

const runApp = (function (doc){
    const addProjectBtn = doc.querySelector("#add-project");

    addProjectBtn.addEventListener("click", (e)=>{
        e.stopPropagation();
        openProjectModal();
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
    const projecNameEle = document.querySelector("#project-title");
    const newProjectName = projecNameEle.value;
    
    // add project to backend logic:
    ProjectManager.addProject(newProjectName);
    
    addNewProject();
    }
    )
}

function addNewProject()
{



    //add project to dom:
    
    const projectBar = document.querySelector("#all-projects");
    const addBtn = document.querySelector("#add-project");

    const li = document.createElement('li');
    const btn = document.createElement('button');

    const allProjects = ProjectManager.getAllProjects();

    const currentProject = allProjects[allProjects.length-1];

    btn.textContent = currentProject.getProjectName();
    li.setAttribute("project-index", allProjects.length-1);

    li.appendChild(btn);

    projectBar.insertBefore(li, addBtn);

}
