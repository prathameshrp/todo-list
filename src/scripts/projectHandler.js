import {ToDoList} from "./todoHandler.js";
import promptUser from "./inputHandler.js";
class Project
{
    
    constructor(projectTitle)
    {
        this.projectTitle = projectTitle;
        this.allToDoLists = [];
    }
    createList(listTitle) {
        // const Obj = promptUser();
        const newList = new ToDoList(listTitle);
        // newList.setDescription(Obj.d);
        // newList.setDate(Obj.date);
        this.allToDoLists.push(newList);
    }
    getProjectName()
    {
        return this.projectTitle;
    }

    getAllTodos()
    {
        return this.allToDoLists;
    }

    listName(index)
    {
        return this.allToDoLists[index].getListName();
    }

}

export {Project};