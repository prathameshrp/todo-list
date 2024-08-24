import defaultContent from "./defaultContent.json";
import { active_list, active_project } from "./DOMHandler";
import { 
    parseTaskObj, 
    parseListObj,
    parseProjectObj, 
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
        project.deleteList(lIndex);

    }
    static getAllProjects()
    {
        return this.#projectsInStorage;
    }
}


//IIFE to insert default content in the ProjecrManager

function insertDefaultProjects()
{
    const data = defaultContent;
    
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

    });
};

function projectList() {
    return ProjectManager.getAllProjects();
}

// new project addition logic:

function addNewProject(newProjectName)
{

//add to ProjectManager:
 
    const newProject =  parseProjectObj({"name": newProjectName});
    
    ProjectManager.addProject(newProject);

}
function addNewList(newListName) {
    const newList = parseListObj({"name": newListName});
    projectList()[active_project].createList(newList);
}

function addNewTask(taskName, taskDesc, date = new Date(), priority = 2) {
    const newTask = parseTaskObj({
        "name": taskName,
        "description": taskDesc,
        "due_date": date,
        "priority": priority,
    })

    projectList()[active_project].getLists()[active_list].createTask(newTask);
}

function deleteProject(index) {
    ProjectManager.deleteProject(index);
    console.log(projectList());
}

function deleteList(projectIndex, listIndex) {
    ProjectManager.deleteList(projectIndex, listIndex);
    console.log(projectList());
}
export {
    insertDefaultProjects,
    projectList,
    addNewProject,
    addNewList,
    addNewTask,
    deleteProject,
    deleteList,
}