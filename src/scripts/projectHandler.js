import {ToDoList} from "./ListHandler.js";

class Project
{
    #projectName;
    #todoListsInThisProject = [];
    constructor(projectName = "New Project")
    {
        this.#projectName = projectName;
    }

    createList(listName = "New List") {
        // const Obj = promptUser();
        const newList = new ToDoList(listName);
        // newList.setDescription(Obj.d);
        // newList.setDate(Obj.date);
        this.#todoListsInThisProject.push(newList);
    }
    getProjectName()
    {
        return this.#projectName;
    }

    getLists()
    {
        return [...this.#todoListsInThisProject];
    }

    nameOfList(index)
    {
        return this.allToDoLists[index].getListName();
    }

}

export {Project};