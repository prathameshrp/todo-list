import {ToDoList} from "./todoHandler.js";
import promptUser from "./inputHandler.js";
class Project
{
    
    constructor(projectTitle)
    {
        this.projectTitle = projectTitle;
        this.allToDoLists = [];
    }
    createList() {
        const Obj = promptUser();
        const newList = new ToDoList(Obj.t);
        newList.setDescription(Obj.d);
        // newList.setDate(Obj.date);
        this.allToDoLists.push(newList);
    }

}

export {Project};