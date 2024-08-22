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
        {populateNavigatorList(project.getLists())})
    pli.appendChild(pbtn);
    projectBar.insertBefore(pli, addProjectBtn);
}

function populateNavigatorList(list)
{    
   
    const listNaviator = document.querySelector("#all-lists");
    const addListBtn = document.querySelector("#add-list");
    listNaviator.replaceChildren(addListBtn);
    for(let i = 0; i<list.length; ++i)
        {
            const lli = document.createElement('li');
            const lbtn = document.createElement('button');
            lli.setAttribute("list-index", i);

            lli.addEventListener("click", ()=>
            {
                populateListTask(i, list[i].getAllTasks());
            })
            lbtn.textContent = list[i].getListName();
            lli.appendChild(lbtn);
            listNaviator.insertBefore(lli, addListBtn);
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


function populateListTask(todoIndex, tasks)
{
    const mainList = document.querySelector("#list");
    mainList.replaceChildren();
    const addTaskBtn = document.querySelector("#add-task");
    for(let i = 0; i<tasks.length; ++i)
    {
        const tdt = document.createElement('dt');
        const tdd = document.createElement('dd');
        addTaskBtn.setAttribute("list-index", todoIndex);
        
        tdt.textContent = tasks[i].getTitle();
        tdd.textContent = tasks[i].getDescription();

        mainList.appendChild(tdt);
        mainList.appendChild(tdd);
    }

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


export {populateDOM, populateNavigatorList, populateListTask, populateNewProject};