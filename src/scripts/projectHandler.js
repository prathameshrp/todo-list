// Class project to handle all the todolists under a single project

// Responsibility: To manage all ToDo lists under a single object

class Project
{
    // projectName;
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

    deleteList(index)
    {
        if(this.#todoListsInThisProject.length === 0) return;
        this.#todoListsInThisProject.splice(index, 1);
        
    }
    deleteTaskFromList(listIndex, taskIndex)
    {
        const list = this.getLists()[listIndex];
        list.deleteToDo(taskIndex);
    }

    toJSON()
    {
        return JSON.stringify(
            {
                projectName: this.#projectName,
                todoListsInThisProject: this.#todoListsInThisProject
            }
        );
    }

}

export {Project};