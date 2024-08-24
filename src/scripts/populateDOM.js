// import { Project } from "./projectHandler";
import data from "./defaultContent.json";

// To add a new project, that has functional button to display its list (works fine)
function populateNewProject(project, index)
{
    const projectBar = document.querySelector("#all-projects");
    const addProjectBtn = document.querySelector("#add-project");
    const pli = document.createElement('li');
    const pbtn = document.createElement('button');
    pbtn.textContent = project.getProjectName();
    
    pli.setAttribute('project-index', index);
    pli.addEventListener("click", ()=>
        {populateNavigatorList(project.getLists(), index)})
    pli.appendChild(pbtn);
    projectBar.insertBefore(pli, addProjectBtn);
}

// This function is used to replace the navigator list with currently selected project, params: all list objects of selected project and index of project to ensure we add further lists to same project
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
            populateNewList(i, lists[i]);
        }
    populateListTask(0, lists[0].getAllTasks());
    }
        
}

function populateNewList(index, list)
{
    const listNavigator = document.querySelector("#all-lists");
    const addListBtn = document.querySelector("#add-list");

    const lli = document.createElement('li');
    const lbtn = document.createElement('button');
    lli.setAttribute("list-index", index);

    lli.addEventListener("click", ()=>
            {
                populateListTask(index, list.getAllTasks());
            })
    lbtn.textContent = list.getListName();
    lli.appendChild(lbtn);
    listNavigator.insertBefore(lli, addListBtn);
}


function populateListTask(todoIndex, tasks)
{
    const mainList = document.querySelector("#list");
    mainList.replaceChildren();
    const addTaskBtn = document.querySelector("#add-task");
    addTaskBtn.setAttribute("active-list", todoIndex);

    for(let i = 0; i<tasks.length; ++i)
    {
        populateNewtask(todoIndex, tasks[i].getTitle(), tasks[i].getDescription())
    }

}

function populateNewtask(todoIndex, taskName, taskDesc)
{
    const mainList = document.querySelector("#list");
    const addTaskBtn = document.querySelector("#add-task");

    const tdt = document.createElement('dt');
    const tdd = document.createElement('dd');
    addTaskBtn.setAttribute("active-list", todoIndex);
    
    tdt.textContent = taskName;
    tdd.textContent = taskDesc;

    mainList.appendChild(tdt);
    mainList.appendChild(tdd);

}

export default function generateDefaultContent()
{
    return data;
}


export {populateNavigatorList,  populateListTask, populateNewProject, populateNewList, populateNewtask};