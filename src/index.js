import "../assets/fonts/stylesheet.css"
import "./style.css"

import {
    populateDOM,
    populateNewProject,
    populateNewList,
    active_project,
    active_list,
} from "./scripts/DOMHandler.js";

import { insertDefaultProjects,
    projectList, 
    addNewProject,
    addNewList,
} from "./scripts/crudLogicHandler.js";



insertDefaultProjects();
populateDOM(projectList());


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


    // const addTaskButton = doc.querySelector("#add-task");
    // addTaskButton.addEventListener("click", (e)=>{
    //     e.stopPropagation();
    //     openTaskModal();
    // })

    // const submitPBtn = document.querySelector("#submit-project");
    // submitPBtn.addEventListener("click", )
    const projectFrom = document.querySelector('[name="projectForm"]');
    projectFrom.addEventListener("submit",(e)=>
        {
        e.stopPropagation();
        // add project to backend logic:
        const newProjectName = returnEleVal("#project-title");
        addNewProject(newProjectName);
        const index = projectList().length-1;
        populateNewProject(projectList()[index], index);
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
        populateNewList(projectList()[active_project].getLists()[index], index);
        closeDialog("#list-dialog");
        // addNewList();
    });

    // const taskFrom = document.querySelector('[name="taskForm"]');

    // taskFrom.addEventListener("submit", (e)=>
    // {
    //     e.stopPropagation();
    // // add task to backend logic:
    
    // addNewTask();
    // });



})(document);

function returnEleVal(ele)
{
    const NameEle = document.querySelector(ele);
    const newName = NameEle.value;
    
    return newName;
}
function openProjectModal()
{
    const projectDialog = document.querySelector("#project-dialog");
    projectDialog.showModal();

}

function closeDialog(ele)
{

//add to array
    // populateDOM(ProjectManager.getAllProjects());
    // populateNavigatorList(newProject.getLists());

    const dialog = document.querySelector(ele);
    dialog.close();
}

function openListModal()
{
    const listDialog = document.querySelector("#list-dialog");
    listDialog.showModal();
    
}

// function addNewList()
// {


//     const activeProject = active_project;
//     const listNameEle = document.querySelector("#list-title");
//     const newListName = listNameEle.value;
//     const newList = new ToDoList(newListName);
//     const listParentProject = ProjectManager.getAllProjects()[activeProject];
//     console.log("This Must be all projects", ProjectManager.getAllProjects());
//     console.log("This Must be index I am looking for", activeProject);


//     console.log("This Must be project", listParentProject);
//     listParentProject.createList(newList);
//     // populateDOM(ProjectManager.getAllProjects());
//     // populateNavigatorList(newProject.getLists());
//     populateNewList(listParentProject.getLists().length -1, newList);
//     const listDialog = document.querySelector("#list-dialog");
//     listDialog.close();
// }



// function openTaskModal()
// {
//     const taskDialog = document.querySelector("#task-dialog");
//     taskDialog.showModal();
    
// }

// function addNewTask()
// {

//     const activeProject = active_project;
//     const activeList = active_list;
//     const taskNameEle = document.querySelector("#task-title");
//     const taskDescEle = document.querySelector("#task-desc");

//     const newTaskName = taskNameEle.value;
//     const newTaskDesc = taskDescEle.value;;

//     const listParentProject = ProjectManager.getAllProjects()[activeProject];
//     const taskParentList = listParentProject.getLists()[activeList];
//     if(newTaskDesc != 0)     
//         taskParentList.createTask(newTaskName, newTaskDesc);
//     else
//         taskParentList.createTask(newTaskName);
//     const lastIndex = taskParentList.getAllTasks().length -1;
//     populateNewtask(lastIndex, taskParentList.getAllTasks()[lastIndex].getTitle(), taskParentList.getAllTasks()[lastIndex].getDescription());
//     const taskDialog = document.querySelector("#task-dialog");
//     taskDialog.close();
// }


// // Deleting projects functionality:

