import {ToDoList} from "./ListHandler.js";

class Project
{
    #projectTitle;
    #todoListsInThisProject = [];
    constructor(projectTitle = "New Project")
    {
        this.#projectTitle = projectTitle;
    }

    createList(listTitle = "New List") {
        // const Obj = promptUser();
        const newList = new ToDoList(listTitle);
        // newList.setDescription(Obj.d);
        // newList.setDate(Obj.date);
        this.#todoListsInThisProject.push(newList);
    }
    getProjectName()
    {
        return this.#projectTitle;
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