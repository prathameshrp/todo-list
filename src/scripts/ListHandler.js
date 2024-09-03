// Class to store all the to do tasks under single object

import { ToDoTask } from "./taskHandler";

class ToDoList
{
    
    #listName;
    #createdDate;
    #todoTasksInThisList = [];
    
    constructor(listName = "New List")
    {
        this.#listName = listName;
        // this.#createdDate = new Date();
    }

    createTask(taskObj) {
        // const Obj = promptUser();
        this.#todoTasksInThisList.push(taskObj);
    }

    setDate(date = new Date())
    {
        this.#createdDate = date;
    }
    getAllTasks()
    {
        return this.#todoTasksInThisList;
    }
    getListName()
    {
        return this.#listName;
    }
    getCreationDate()
    {
        return this.#createdDate;
    }
    deleteToDo(index)
    {
        if(this.#todoTasksInThisList.length === 0) return;
        this.#todoTasksInThisList.splice(index, 1);
    }
    toJSON()
    {
        const methods = {};
        for(let key of Object.getOwnPropertyNames(ToDoList.prototype))
        {
            if(key !== "constructor" && typeof this[key] == "function")
            {
                methods[key] = this[key].toString();
            }
            // if(key == "todoTaksInThisList")
        }
        // console.log(JSON.stringify(this.#todoTaksInThisList));
        const totasks = this.#todoTasksInThisList.map(e => e.toJSON());
        return JSON.stringify(
            {
                name: this.#listName,
                tasks: totasks,
                createdDate: this.#createdDate,
                methods: methods,

            }
        );
    }

   
}

// const today = new ToDoList("Today");
// const tomorrow = new ToDoList("Tomorrow");
///test code ^

export {ToDoList};