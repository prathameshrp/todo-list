import "../assets/fonts/stylesheet.css"
import "./style.css"
import { Project } from "./scripts/projectHandler.js";

// import { ToDoList } from "./scripts/todoHandler.js";

// populating dom from js:
const projects = [];
const neodo = new Project("Neo.do");
const newProject = new Project("Default");

projects.push(neodo);
projects.push(newProject);

const projectList = document.querySelector("#all-projects");
const addProjectBtn = document.querySelector("#add-project");
for(let i = 0; i<projects.length; ++i)
{
    const li = document.createElement('li');
    const pbtn = document.createElement('button');

    pbtn.textContent = projects[i].getProjectName();

    li.appendChild(pbtn);

    // projectList.appendChild(li);
    projectList.insertBefore(li, addProjectBtn);
}


// Logic to create a new task in current list

const addTaskBtn = document.querySelector("#add-task");
const taskDialog = document.querySelector("#task-dialog");
addTaskBtn.addEventListener("click", (e)=>
{
    e.stopPropagation();
    taskDialog.showModal();

})

const submitTaskBtn = taskDialog.querySelector("#submit-task");

submitTaskBtn.addEventListener("click", (e)=>
{
    e.stopPropagation();
    const title = taskDialog.querySelector("#task-title");
    const desc = taskDialog.querySelector("#task-desc");

    appendToList(title.value, desc.value);

})

function appendToList(title, desc) {
    const list = document.querySelector("#list");
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");

    dt.textContent = title;
    dd.textContent = desc;

    list.appendChild(dt);
    list.appendChild(dd);
}

















const projectMenuBtn = document.querySelector('#project-menu-btn');
const projectMenu  = document.querySelector('#side-column');
const mainArea = document.querySelector("#main-area");
projectMenuBtn.addEventListener("click", (e)=>
{
    e.stopPropagation();

    // projectMenu.style.width   = '0px';
    // projectMenu.style.position = "absolute";
    // projectMenu.style.gridColumn = '1/-1';
    // mainArea.style.gridColumn = '1/5';
    // projectMenu.style.left = "-100%";
})
