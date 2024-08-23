// import { Project } from "./projectHandler";
import data from "./defaultContent.json";
 function insertProjects(projectManager)
{
    const data = JSON.parse(data);
    
    data["projects"].forEach(project => {
        projectManager.addProject(project["name"]);
    });

}

function populateDOM(projects)
{
    
    for(let i = 0; i < projects.length; ++i)
    {
     populateNewProject(projects[i], i);
    }
    // console.log(projects);
    // console.log("These are lists:", projects[0].getLists());
    populateNavigatorList(projects[0].getLists());
}
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

function populateNavigatorList(list, projectIndex)
{    
   
    const listNavigator = document.querySelector("#all-lists");
    const addListBtn = document.querySelector("#add-list");
    addListBtn.setAttribute("active-project", projectIndex);
    listNavigator.replaceChildren(addListBtn);
    addListBtn.setAttribute("active-project", projectIndex);
    for(let i = 0; i<list.length; ++i)
        {
            populateNewList(i, list[i])

        }
    if(list.length !=0)
            {
    populateListTask(0, list[0].getAllTasks());
            }
    else
    {
        return;
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
export default function generateFakeContent()
{
   
    return data;
}


export {populateDOM, populateNavigatorList, populateListTask, populateNewProject, populateNewList, populateNewtask};