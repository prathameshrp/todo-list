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
            {populateNavigatorList(i, lists[i], tasks[i])})
        pli.appendChild(pbtn);
        projecBar.insertBefore(pli, addProjectBtn);
    }
    populateNavigatorList(0, lists[0], tasks[0])


}

function populateNavigatorList(listIndex, list, tasks)
{    
    const listNaviator = document.querySelector("#all-lists");
    const addListBtn = document.querySelector("#add-list");
    listNaviator.replaceChildren(addListBtn);
    for(let i = 0; i<list.length; ++i)
        {
            const lli = document.createElement('li');
            const lbtn = document.createElement('button');
            lli.setAttribute("list-index", i);

            lli.addEventListener("click", ()=>
            {
                populateListTask(i, tasks[i]);
            })
            lbtn.textContent = list[i];
            lli.appendChild(lbtn);
            listNaviator.insertBefore(lli, addListBtn);
        }
}


function populateListTask(todoIndex, tasks)
{
    const mainList = document.querySelector("#list");
    mainList.replaceChildren();
    const addTaskBtn = document.querySelector("#add-task");
    for(let i = 0; i<tasks.length; ++i)
    {
        const tdt = document.createElement('dt');
        const tdd = document.createElement('dd');
        addTaskBtn.setAttribute("list-index", todoIndex);

        tdt.textContent = tasks[i][0];
        tdd.textContent = tasks[i][1];

        mainList.appendChild(tdt);
        mainList.appendChild(tdd);

    }

}

populateSideBarDOM();

function generateFakeContent()
{
    const projectNames = ["Neo.do", "Default"];

    const projectLists = [["Productivity", "Exercise", "Dailies"], 
                          ["Today", "Tomorrow", "Weekly Todos'"]];

    const projectTasks = [
        [
            [["Create To Dos", "Easy to create"], ["Manage To Dos", "Effectively manage ToDos"], ["Set Descriptions", "Like This, Lorem Ipsum? Hyderate yoursel"]],

            [["Drink Water", ""], ["Run for 30mins", ""]], 
            
            [["Buy Milk", ""], ["Cook breakfast", ""]]
        ], 
        [
            [["Study Biology", "Atleast for 30mins"], ["Lie on floor", "Think about life"]], 
            
            [["Attend lectures"], ["Buy something sweet", "Preferbally pineapple pastry"]], 
            
            [["Enjoy Holidays", ""]]
        ]

];

    return {projectNames, projectLists, projectTasks};
}