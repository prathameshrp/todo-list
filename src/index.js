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

placeholderContent();