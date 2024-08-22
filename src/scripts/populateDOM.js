
export default function insertProjects(projectManager)
{
    const data = generateFakeContent();
    
    data["projects"].forEach(project => {
        projectManager.addProject(project["name"]);
    });
}

function populateSideBarDOM()
{
    const content = generateFakeContent();
    const projects = content.projectNames;
    const lists = content.projectLists;
    const tasks = content.projectTasks;
    for(let i = 0; i < projects.length; ++i)
    {
        const projecBar = document.querySelector("#all-projects");
        const addProjectBtn = document.querySelector("#add-project");
        const pli = document.createElement('li');
        const pbtn = document.createElement('button');
        pbtn.textContent = projects[i];
        
        pli.setAttribute('project-index', i);
        pli.addEventListener("click", ()=>
            {populateNavigatorList(i, lists[i], tasks[i])})
        pli.appendChild(pbtn);
        projecBar.insertBefore(pli, addProjectBtn);
    }
    populateNavigatorList(0, lists[0], tasks[0])


}

function populateNavigatorList(listIndex, list, tasks)
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
                populateListTask(i, tasks[i]);
            })
            lbtn.textContent = list[i];
            lli.appendChild(lbtn);
            listNaviator.insertBefore(lli, addListBtn);
        }
    populateListTask(0, tasks[0]);
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

        tdt.textContent = tasks[i][0];
        tdd.textContent = tasks[i][1];

        mainList.appendChild(tdt);
        mainList.appendChild(tdd);

    }

}

function generateFakeContent()
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


