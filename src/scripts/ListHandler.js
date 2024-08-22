import promptUser from "./inputHandler";
import { ToDoTask } from "./taskHandler";

class ToDoList
{
    #listName;
    #todoTaksInThisList = [];
    constructor(listName)
    {
        this.#listName = listName;
    }

    createTask(title = "New Task", desc = "Do X before Y...", date = new Date(), priority = 2) {
        // const Obj = promptUser();
        const newTask = new ToDoTask(title);
        newTask.setDescription(desc);
        newTask.setDate(date);
        newTask.setPriority(priority);
        this.#todoTaksInThisList.push(newTask);
    }

    getAllTasks()
    {
        return this.#todoTaksInThisList;
    }
    getListName()
    {
        return this.#listName;
    }
}

// const today = new ToDoList("Today");
// const tomorrow = new ToDoList("Tomorrow");
///test code ^

export {ToDoList};