import { projectList, deleteProject } from "./crudLogicHandler";
function populateDOM(projects)
{
    const projectBar = document.querySelector("#all-projects");
    const addProjectBtn = document.querySelector("#add-project");

    projectBar.replaceChildren(addProjectBtn);
    for(let i = 0; i < projects.length; ++i)
    {
     populateNewProject(projects[i], i);
    }

    setBlankProj(projects);
    
}

function setBlankProj(projects)
{
    if(projects.length != 0)
        {
        populateNavigatorList(projects[0].getLists(), 0);
        populateListTask(projects[0].getLists()[0].getAllTasks(), 0);
        console.log(projects);
        }
        else
        {
            const mainList = document.querySelector("#list");
            mainList.replaceChildren();
            const listNavigator = document.querySelector("#all-lists");
            const addListBtn = document.querySelector("#add-list");
            listNavigator.replaceChildren(addListBtn);
        }
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
    const dbtn = document.createElement('button');

    const deleteIcon = document.querySelector("#trash");
    const cloneDel = deleteIcon.content.cloneNode(true);
    
    dbtn.setAttribute('del-project-index', index);

    pbtn.textContent = project.getProjectName();

    dbtn.appendChild(cloneDel);
    pbtn.setAttribute('project-index-button', index);
    pli.setAttribute('project-index', index);

    pli.appendChild(pbtn);
    pli.appendChild(dbtn);
    projectBar.insertBefore(pli, addProjectBtn);

    setEventsToProject(project, index);

}


function setEventsToProject(project, index) {
    const btn = document.querySelector(`[project-index-button="${index}"]`);
    btn.addEventListener("click", (e)=>
    {
        populateNavigatorList(project.getLists(), index);
        active_project = index;
        setBlankDOM(project);
    })

    const dbtn = document.querySelector(`[del-project-index="${index}"]`);

    dbtn.addEventListener("click", (e)=>{
        e.stopPropagation();
        deleteProject(index);
        deleteFromDOM("project", index);
    })
}

function setBlankDOM(project) {
    if(project.getLists() != 0)
        populateListTask(project.getLists()[0].getAllTasks(), 0);
        else
        {
            const mainList = document.querySelector("#list");
            mainList.replaceChildren();
        }
}



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
    setEventsToList(list, index);

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
        populateNewtask(tasks[i], todoIndex)
    }

}

function populateNewtask(task, todoIndex)
{
    const mainList = document.querySelector("#list");
    const addTaskBtn = document.querySelector("#add-task");
    const tdt = document.createElement('dt');
    const tdd = document.createElement('dd');
    addTaskBtn.setAttribute("active-list", todoIndex);
    console.log(task);
    const taskName = task.getTitle();
    const taskDesc = task.getDescription();
    tdt.textContent = taskName;
    tdd.textContent = taskDesc;

    mainList.appendChild(tdt);
    mainList.appendChild(tdd);

}

function deleteFromDOM(ele, index) {
    const li = document.querySelector(`[${ele}-index="${index}"]`);
    li.remove();
    populateDOM(projectList());
}

export {populateDOM,
        populateNewProject,
        populateNewList,
        populateNewtask,
        active_list, 
        active_project};