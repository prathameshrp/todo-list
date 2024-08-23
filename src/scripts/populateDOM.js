// import { Project } from "./projectHandler";

 function insertProjects(projectManager)
{
    const data = generateFakeContent();
    
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
        // console.log(list[i]);

        }
        // console.log(list);
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
    const data = {
        "projects": [
            {
                "name": "Neo.do",
                "lists": [
                    {
                        "name": "Productivity",
                        "tasks": [
                            {
                                "name": "Create To Dos",
                                "description": "Easy to create",
                                "priority": null,
                                "due_date": null
                            },
                            {
                                "name": "Manage To Dos",
                                "description": "Effectively manage ToDos",
                                "priority": null,
                                "due_date": null
                            },
                            {
                                "name": "Set Descriptions",
                                "description": "Like This, Lorem Ipsum? Hyderate yourself",
                                "priority": null,
                                "due_date": null
                            }
                        ]
                    },
                    {
                        "name": "Exercise",
                        "tasks": [
                            {
                                "name": "Drink Water",
                                "description": "",
                                "priority": null,
                                "due_date": null
                            },
                            {
                                "name": "Run for 30mins",
                                "description": "",
                                "priority": null,
                                "due_date": null
                            }
                        ]
                    },
                    {
                        "name": "Dailies",
                        "tasks": [
                            {
                                "name": "Buy Milk",
                                "description": "",
                                "priority": null,
                                "due_date": null
                            },
                            {
                                "name": "Cook breakfast",
                                "description": "",
                                "priority": null,
                                "due_date": null
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Default",
                "lists": [
                    {
                        "name": "Today",
                        "tasks": [
                            {
                                "name": "Study Biology",
                                "description": "At least for 30mins",
                                "priority": null,
                                "due_date": null
                            },
                            {
                                "name": "Lie on floor",
                                "description": "Think about life",
                                "priority": null,
                                "due_date": null
                            }
                        ]
                    },
                    {
                        "name": "Tomorrow",
                        "tasks": [
                            {
                                "name": "Attend lectures",
                                "description": null,
                                "priority": null,
                                "due_date": null
                            },
                            {
                                "name": "Buy something sweet",
                                "description": "Preferably pineapple pastry",
                                "priority": null,
                                "due_date": null
                            }
                        ]
                    },
                    {
                        "name": "Weekly Todos'",
                        "tasks": [
                            {
                                "name": "Enjoy Holidays",
                                "description": "",
                                "priority": null,
                                "due_date": null
                            }
                        ]
                    }
                ]
            }
        ]
    }
    
    return data;
}


export {populateDOM, populateNavigatorList, populateListTask, populateNewProject, populateNewList, populateNewtask};