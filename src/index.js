import "../assets/fonts/stylesheet.css"
import "./modalStyles.css"
import "./style.css"

import {
    populateDOM,
    populateNewProject,
    populateNewList,
    populateNewtask,
    active_project,
    active_list,
    
} from "./scripts/DOMHandler.js";

import { insertDefaultProjects,
    projectList, 
    addNewProject,
    addNewList,
    addNewTask,
    storedProjects,
} from "./scripts/crudLogicHandler.js";


if(localStorage.length == 0)
    insertDefaultProjects();

storedProjects();
populateDOM(projectList());


const runApp = (function (doc){
    const addProjectBtn = doc.querySelector("#add-project");

    addProjectBtn.addEventListener("click", (e)=>{

        e.stopPropagation();
        openModal("#project-dialog");
    })

    const addListButton = doc.querySelector("#add-list");
    addListButton.addEventListener("click", (e)=>{
        e.stopPropagation();
        if(projectList().length != 0)
        openModal("#list-dialog");
    })


    const addTaskButton = doc.querySelector("#add-task");
    addTaskButton.addEventListener("click", (e)=>{
        e.stopPropagation();
        const today = new Date();
        document.querySelector("#task-date").value = today.toISOString().substr(0, 10);
        if(projectList().length != 0 && projectList()[active_project].getLists() != 0)
        openModal("#task-dialog");
    })


    const projectFrom = document.querySelector('[name="projectForm"]');
    projectFrom.addEventListener("submit",(e)=>
        {
        e.stopPropagation();
        // add project to backend logic:
        const newProjectName = returnEleVal("#project-title");
        addNewProject(newProjectName);
        const index = projectList().length-1;
        const project = projectList()[index];
        populateNewProject(project, index);
        closeDialog("#project-dialog");
        } );


    const listFrom = document.querySelector('[name="listForm"]');

    listFrom.addEventListener("submit", (e)=>
    {
        e.stopPropagation();
    // add list to backend logic:
        const newListName = returnEleVal("#list-title");
        addNewList(newListName);
        const index = projectList()[active_project].getLists().length-1;
        const list = projectList()[active_project].getLists()[index];
        populateNewList(list, index);
        closeDialog("#list-dialog");
        // addNewList();
    });

    const taskFrom = document.querySelector('[name="taskForm"]');

    taskFrom.addEventListener("submit", (e)=>
    {
        e.stopPropagation();
    // add task to backend logic:
    const taskName = returnEleVal("#task-title");
    const taskDesc = returnEleVal("#task-desc");
    const taskDate = returnEleVal("#task-date");
    const taskPrior = returnEleVal("#priority");
    addNewTask(taskName, taskDesc, taskDate, taskPrior);
        const index = projectList()[active_project].getLists()[active_list].getAllTasks().length -1;
        const task =  projectList()[active_project].getLists()[active_list].getAllTasks()[index]
        populateNewtask(task, index, active_list);
        closeDialog("#task-dialog");

    });

    const reset = document.querySelector("#resetStorage");
    reset.addEventListener("click", (e)=>
    {
        localStorage.clear();
        location.reload();
    })

    const allCloseBtns = document.querySelectorAll('.close-btn');
    allCloseBtns.forEach(btn => {
        btn.addEventListener("click", (e)=>{
            closeDialog('#'+e.target.parentElement.parentElement.parentElement.getAttribute('id'));
        })
    });


})(document);

function returnEleVal(ele)
{
    const NameEle = document.querySelector(ele);
    const newName = NameEle.value;
    
    return newName;
}

function openModal(ele)
{
    const dialog = document.querySelector(ele);
    dialog.showModal();
}

function closeDialog(ele)
{

    const dialog = document.querySelector(ele);
    dialog.close();
}

