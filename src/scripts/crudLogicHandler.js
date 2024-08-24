import defaultContent from "./defaultContent.json";
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
        this.#projectsInStorage.splice(index, 1);
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
    // populateDOM(ProjectManager.getAllProjects());
    // populateNavigatorList(newProject.getLists());

}

export {
    insertDefaultProjects,
    projectList,
    addNewProject,
}