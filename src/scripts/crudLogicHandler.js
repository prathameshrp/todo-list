import defaultContent from "./defaultContent.json";
import { active_list, active_project } from "./DOMHandler";
import { 
    parseTaskObj, 
    parseListObj,
    parseProjectObj,
    parseProjectJson, 
} from "./objParsers";
// A project manager class to store all projects under a static module
// Responsibility: Read, Write, Delete all Projects

class ProjectManager
{
    static #projectsInStorage = [];
    
    static addProject(projectObj)
    {
        this.#projectsInStorage.push(projectObj);
    }

    static deleteProject(index)
    {
        if(this.#projectsInStorage.length === 0) return;
        this.#projectsInStorage.splice(index, 1);
    }

    static deleteList(pIndex, lIndex)
    {
        
        const project= this.getAllProjects()[pIndex];
        if(project)
            project.deleteList(lIndex);

    }
    static getAllProjects()
    {
        return this.#projectsInStorage;
    }
    static deleteTask(projectIndex, listIndex, taskIndex){
        const project= this.getAllProjects()[projectIndex];
        if(project)
            project.deleteTaskFromList(listIndex, taskIndex);
    }

}


//IIFE to insert default content in the ProjectManager

function insertDefaultProjects()
{
    const data = defaultContent;
    
    let i = 0;
    data["projects"].forEach(project => {
        
        
        const newProject = parseProjectObj(project);

        const lists = project["lists"];

        lists.forEach(list => {
            const newList = parseListObj(list);
            const tasks = list["tasks"];
            
            tasks.forEach(task => {
                const newTask = parseTaskObj(task);
                newList.createTask(newTask);
            });

            newProject.createList(newList);
        })
        ProjectManager.addProject(newProject);
        console.log(newProject.toJSON());
        localStorage.setItem(`project_${i}`, newProject.toJSON());
        ++i;
    });
};

function projectList() {
    return ProjectManager.getAllProjects();
}

// new project addition logic:

function addNewProject(newProjectName)
{

//add to ProjectManager:
 
    const newProject =  parseProjectObj({
        "name": newProjectName,
        "todoListsInThisProject": [],

    });
    
    ProjectManager.addProject(newProject);
    localStorage.setItem(`project_${projectList().length-1}`, newProject.toJSON());

}
function addNewList(newListName) {
    const newList = parseListObj({
        "name": newListName,
        "createdDate": new Date(),
        "todoTasksInThisList": [],
    });
    projectList()[active_project].createList(newList);

    // localStorage.setItem(`project_${active_project}_list_${projectList()[active_project].getLists().length}`, JSON.stringify(newList));
    localStorage.setItem(`project_${active_project}`, projectList()[active_project].toJSON());

}

function addNewTask(taskName, taskDesc, date = new Date(), priority = 2) {
    const newTask = parseTaskObj({
        "name": taskName,
        "description": taskDesc,
        "due_date": date,
        "priority": priority,
    })

    projectList()[active_project].getLists()[active_list].createTask(newTask);

    localStorage.setItem(`project_${active_project}`, projectList()[active_project].toJSON());

}

function deleteProject(index) {
    ProjectManager.deleteProject(index);
    console.log(projectList());
}

function deleteList(projectIndex, listIndex) {
    ProjectManager.deleteList(projectIndex, listIndex);
    console.log(projectList());
}

function deleteTask(projectIndex, listIndex, taskIndex) {
    ProjectManager.deleteTask(projectIndex, listIndex, taskIndex);
    console.log(projectList());
}

function storedProjects()
{
    
    let i = 0;
    while(localStorage.getItem(`project_${i}`) != null)
    {
        ProjectManager.addProject(parseProjectJson(localStorage.getItem(`project_${i}`)));
        ++i;
    }

    return projectList();
}
export {
    insertDefaultProjects,
    projectList,
    addNewProject,
    addNewList,
    addNewTask,
    deleteProject,
    deleteList,
    deleteTask,
    storedProjects,
}