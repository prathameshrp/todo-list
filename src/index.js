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

function populateSideBarDOM()
{
    const content = generateFakeContent();
    const projects = content.projectNames;
    const lists = content.projectLists;
    const tasks = content.projectTasks;
    for(let i = 0; i < projects.length; ++i)
    {
        const projecBar = document.querySelector("#all-projects");
        const addProjectBtn = document.querySelector("#add-project");
        const pli = document.createElement('li');
        const pbtn = document.createElement('button');
        pbtn.textContent = projects[i];
        pli.setAttribute('project-index', i);
        pli.addEventListener("click", ()=>
            {populateNavigatorList(lists[i])})
        pli.appendChild(pbtn);
        projecBar.insertBefore(pli, addProjectBtn);
    }


}

function populateNavigatorList(list)
{    
    const listNaviator = document.querySelector("#all-lists");
    const addListBtn = document.querySelector("#add-list");
    listNaviator.replaceChildren(addListBtn);
    for(let i = 0; i<list.length; ++i)
        {

            const lli = document.createElement('li');
            const lbtn = document.createElement('button');
            lli.setAttribute("list-index", i);
            lbtn.textContent = list[i];
            lli.appendChild(lbtn);
            listNaviator.insertBefore(lli, addListBtn);

        }
}
populateSideBarDOM();

function generateFakeContent()
{
    const projectNames = ["Neo.do", "Default"];

    const projectLists = [["Productivity", "Exercise", "Dailies"], 
                          ["Today", "Tomorrow", "Weekly Todos'"]];

    const projectTasks = [[[["Create To Dos", "Easy to create"], "Manage To Dos", ["Set Descriptions", "Like This, Lorem Ipsum? Hyderate yoursel"]], ["Drink Water", "Run for 30mins"], ["Buy Milk", "Cook breakfast"]], 
    [["Study Biology", "Lie on floor", "Think about life"], ["Attend lectures", "Buy something sweet"], ["Enjoy Holidays"]]];

    return {projectNames, projectLists, projectTasks};
}