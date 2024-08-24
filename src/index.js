import "../assets/fonts/stylesheet.css"
import "./style.css"

import {
    populateDOM,
    populateNewProject,
} from "./scripts/DOMHandler.js";

import { insertDefaultProjects,
    projectList, 
    addNewProject,
} from "./scripts/crudLogicHandler.js";



insertDefaultProjects();
populateDOM(projectList());


const runApp = (function (doc){
    const addProjectBtn = doc.querySelector("#add-project");

    addProjectBtn.addEventListener("click", (e)=>{
        e.stopPropagation();
        openProjectModal();
    })

    // const addListButton = doc.querySelector("#add-list");
    // addListButton.addEventListener("click", (e)=>{
    //     e.stopPropagation();
    //     openListModal();
    // })


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
        const newProjectName = returnProjectName();
        addNewProject(newProjectName);
        populateNewProject(projectList()[projectList().length-1], projectList().length-1);
        closeProjectDialog();
        } );


    // const listFrom = document.querySelector('[name="listForm"]');

    // listFrom.addEventListener("submit", (e)=>
    // {
    //     e.stopPropagation();
    // // add list to backend logic:
    
    // addNewList();
    // });

    // const taskFrom = document.querySelector('[name="taskForm"]');

    // taskFrom.addEventListener("submit", (e)=>
    // {
    //     e.stopPropagation();
    // // add task to backend logic:
    
    // addNewTask();
    // });



})(document);

function returnProjectName()
{
    const projecNameEle = document.querySelector("#project-title");
    const newProjectName = projecNameEle.value;
    
    return newProjectName;
}
function openProjectModal()
{
    const projectDialog = document.querySelector("#project-dialog");
    projectDialog.showModal();

}

function closeProjectDialog()
{

//add to array
    // populateDOM(ProjectManager.getAllProjects());
    // populateNavigatorList(newProject.getLists());

    const projectDialog = document.querySelector("#project-dialog");
    projectDialog.close();
}

// function openListModal()
// {
//     const listDialog = document.querySelector("#list-dialog");
//     listDialog.showModal();
    
// }

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

