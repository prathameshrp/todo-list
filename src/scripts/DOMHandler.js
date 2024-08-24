
function populateDOM(projects)
{
    for(let i = 0; i < projects.length; ++i)
    {
     populateNewProject(projects[i], i);
     setEventsToProject(projects[i], i);
    }

    // populateNavigatorList(projects[0].getLists());
}


// variables to track activity on current DOM
let active_project = 0;
let active_list = 0;

// adds new project to DOM
function populateNewProject(project, index)
{
    const projectBar = document.querySelector("#all-projects");
    const addProjectBtn = document.querySelector("#add-project");
    const pli = document.createElement('li');
    const pbtn = document.createElement('button');

    // not adding delete button in this branch
    // const dbtn = document.createElement('button');

    // const deleteIcon = document.querySelector("#trash");
    // const cloneDel = deleteIcon.content.cloneNode(true);
    
    // dbtn.setAttribute('del-project-index', index);

    pbtn.textContent = project.getProjectName();

    // dbtn.appendChild(cloneDel);
    pbtn.setAttribute('project-index', index);
    pli.appendChild(pbtn);
    // pli.appendChild(dbtn);
    projectBar.insertBefore(pli, addProjectBtn);
}


function setEventsToProject(project, index) {
    const btn = document.querySelector(`[project-index="${index}"]`);
    btn.addEventListener("click", (e)=>
    {
        populateNavigatorList(project.getLists(), index)
        active_project = index;
    })
}
// import { Project } from "./projectHandler";


// To add a new project, that has functional button to display its list (works fine)

// This function is used to replace the navigator list with currently selected project, params: all list objects of selected project and index of project to ensure we add further lists to same project

// set content of navigator list
function populateNavigatorList(lists, projectIndex)
{    
   
    const listNavigator = document.querySelector("#all-lists");
    const addListBtn = document.querySelector("#add-list");
    listNavigator.replaceChildren(addListBtn);
    addListBtn.setAttribute("active-project", projectIndex);

    if(lists.length != 0)
    {
    for(let i = 0; i<lists.length; ++i)
        {
            populateNewList(lists[i], i);
            setEventsToList(lists[i], i)
        }
    // populateListTask(0, lists[0].getAllTasks());
    }
    else
    {
        const mainList = document.querySelector("#list");
        mainList.replaceChildren();
    }
}


function populateNewList(list, index)
{
    const listNavigator = document.querySelector("#all-lists");
    const addListBtn = document.querySelector("#add-list");

    const lli = document.createElement('li');
    const lbtn = document.createElement('button');
    lli.setAttribute("list-index", index);
    lbtn.textContent = list.getListName();
    lli.appendChild(lbtn);
    listNavigator.insertBefore(lli, addListBtn);
}

function setEventsToList(list, index) {
    const li = document.querySelector(`[list-index="${index}"]`);
    li.addEventListener("click", (e)=>{
        populateListTask(list.getAllTasks(), index);
        active_list = index;
    })
}


function populateListTask(tasks, todoIndex)
{
    const mainList = document.querySelector("#list");
    mainList.replaceChildren();
    // const addTaskBtn = document.querySelector("#add-task");
    // addTaskBtn.setAttribute("active-list", todoIndex);

    for(let i = 0; i<tasks.length; ++i)
    {
        populateNewtask(todoIndex, tasks[i])
    }

}

function populateNewtask(todoIndex, task)
{
    const mainList = document.querySelector("#list");
    const addTaskBtn = document.querySelector("#add-task");
    const tdt = document.createElement('dt');
    const tdd = document.createElement('dd');
    addTaskBtn.setAttribute("active-list", todoIndex);
    
    const taskName = task.getTitle();
    const taskDesc = task.getDescription();
    tdt.textContent = taskName;
    tdd.textContent = taskDesc;

    mainList.appendChild(tdt);
    mainList.appendChild(tdd);

}


export {populateDOM,
    populateNavigatorList,  populateListTask, populateNewProject, populateNewList, populateNewtask, active_list, active_project};