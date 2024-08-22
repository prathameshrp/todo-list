import "../assets/fonts/stylesheet.css"
import "./style.css"
import { Project } from "./scripts/projectHandler.js";

// import { ToDoList } from "./scripts/todoHandler.js";

// populating dom from js:
const projects = [];
const neodo = new Project("Neo.do");

neodo.createList("Today");
neodo.createList("Tomorrow");
const newProject = new Project("Default");

projects.push(neodo);
projects.push(newProject);

const projectList = document.querySelector("#all-projects");
const addProjectBtn = document.querySelector("#add-project");
for(let i = 0; i<projects.length; ++i)
{
    const li = document.createElement('li');
    li.setAttribute("project-index", i);
    const pbtn = document.createElement('button');

    pbtn.textContent = projects[i].getProjectName();

    li.appendChild(pbtn);

    // projectList.appendChild(li);
    projectList.insertBefore(li, addProjectBtn);
}

const headerTitle = document.querySelector("#list-header");
console.log(headerTitle);
function displayCurrentList(list)
{
    const tasks = list.getAllTasks();
    headerTitle.textContent = list.getListName();

    currentList.replaceChildren();
for(let i = 0; i< tasks.length; ++i)
{
    const dt = document.createElement('dt');
    const dd = document.createElement('dd');

    dt.textContent = tasks[i].getTitle();
    dd.textContent = tasks[i].getDescription();

    currentList.appendChild(dt);
    currentList.appendChild(dd);
}
}
//Populating project:
const allToDos = projects[0].getAllTodos();
const addListBtn = document.querySelector("#add-list");
const alllists = document.querySelector("#all-lists");
for(let i = 0; i<allToDos.length; ++i)
{
    const li = document.createElement('li');
    const lbtn = document.createElement('button');
    li.setAttribute('list-index', i);
    li.addEventListener("click", (e)=>
{
    displayCurrentList(allToDos[i]);
}    
    )
    lbtn.textContent = projects[0].listName(i);
    li.appendChild(lbtn);
    alllists.insertBefore(li, addListBtn);
}

//creating a template list:
allToDos[0].createTask("Example Task", "With example description");
const currentList = document.querySelector("#list");

const allTasks = allToDos[0].getAllTasks();

for(let i = 0; i< allTasks.length; ++i)
{
    const dt = document.createElement('dt');
    const dd = document.createElement('dd');

    dt.textContent = allTasks[i].getTitle();
    dd.textContent = allTasks[i].getDescription();

    currentList.appendChild(dt);
    currentList.appendChild(dd);

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

















// const projectMenuBtn = document.querySelector('#project-menu-btn');
// const projectMenu  = document.querySelector('#side-column');
// const mainArea = document.querySelector("#main-area");
// projectMenuBtn.addEventListener("click", (e)=>
// {
//     e.stopPropagation();

//     // projectMenu.style.width   = '0px';
//     // projectMenu.style.position = "absolute";
//     // projectMenu.style.gridColumn = '1/-1';
//     // mainArea.style.gridColumn = '1/5';
//     // projectMenu.style.left = "-100%";
// })


// let mode = true;
// const modeChange = document.querySelector("#mode-change");
// const root = document.querySelector(':root');
// // --theme-primary-color: #EDF0F0;
// // --theme-secondary-color: #ffffff;
// // --theme-contrast-color: #000000;
// // --theme-substitue-color: #c3c6d1;
// // --theme-contrast-dull: #2a2b2b;

// modeChange.addEventListener("click", (e)=>
// {
//     if(true)
//     {
//     root.style.setProperty("--theme-primary-color", "#EDF0F0");
//     root.style.setProperty("--theme-secondary-color:", "#ffffff"); 
//     root.style.setProperty("--theme-contrast-color:", "#000000"); 
//     root.style.setProperty("--theme-substitue-color", "#c3c6d1"); 
//     root.style.setProperty("--theme-contrast-dull", "#2a2b2b");
//     mode = !mode;
//     }
//     else
//     {
//         root.style.setProperty("--theme-primary-color", "#EDF0F0");
//         root.style.setProperty("--theme-secondary-color:", "#000000"); 
//         root.style.setProperty("--theme-contrast-color:", "#ffffff"); 
//         root.style.setProperty("--theme-substitue-color", "#c3c6d1"); 
//         root.style.setProperty("--theme-contrast-dull", "#2a2b2b");
//         mode = !mode;
//     }
// })
