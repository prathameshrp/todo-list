// Class project to handle all the todolists under a single project

// Responsibility: To manage all ToDo lists under a single object

class Project
{
    #projectName;
    #todoListsInThisProject = [];
    constructor(projectName = "New Project")
    {
        this.#projectName = projectName;
    }

    createList(listObj) {
        this.#todoListsInThisProject.push(listObj);
    }
    
    getProjectName()
    {
        return this.#projectName;
    }

    getLists()
    {
        return this.#todoListsInThisProject;
    }

}

export {Project};