import "../assets/fonts/stylesheet.css"
import "./style.css"
import { Project } from "./scripts/projectHandler.js";
import placeholderContent from "./scripts/populateDOM.js";

class ProjectManager
{
    static #projectsInStorage = [];
    
    static addProject(projectName = "New Projec")
    {
        const newProject = new Project(projectName);
        this.#projectsInStorage.push(newProject);
    }

    static deleteProject(index)
    {
        this.#projectsInStorage.splice(index, 1);
    }

    static getAllProjects()
    {
        return [...this.#projectsInStorage];
    }
}

placeholderContent(ProjectManager);

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
