// Class project to handle all the todolists under a single project

// Responsibility: To manage all ToDo lists under a single object

import { ToDoList } from "./ListHandler";
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
        const methods = {};
        for(let key of Object.getOwnPropertyNames(Project.prototype))
        {
            if(key !== "constructor" && typeof this[key] == "function")
            {
                methods[key] = this[key].toString();
            }
            console.log("Hey look here, hey look here hey look here", key);
        }
        const todos = this.#todoListsInThisProject.map(element => element.toJSON());
        return JSON.stringify(
            {
                projectName: this.#projectName,
                todoListsInThisProject: todos,
                methods: methods,

            }
        );
    }

}

export {Project};