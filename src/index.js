import "../assets/fonts/stylesheet.css"
import "./style.css"
import { Project } from "./scripts/projectHandler.js";

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

function populateDOM()
{
    
}


function generateFakeContent()
{
    const projectNames = ["Neo.do", "Default"];

    const projectLists = [["Productivity", "Exercise", "Dailies"], 
                          ["Today", "Tomorrow", "Weekly Todos'"]];

    const tasks = [[[["Create To Dos", "Easy to create"], "Manage To Dos", ["Set Descriptions", "Like This, Lorem Ipsum? Hyderate yoursel"]], ["Drink Water", "Run for 30mins"], ["Buy Milk", "Cook breakfast"]], 
    [["Study Biology", "Lie on floor", "Think about life"], ["Attend lectures", "Buy something sweet"], ["Enjoy Holidays"]]];
}