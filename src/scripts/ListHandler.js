// Class to store all the to do tasks under single object

class ToDoList
{
    #listName;
    #todoTaksInThisList = [];
    constructor(listName = "New List")
    {
        this.#listName = listName;
    }

    createTask(taskObj) {
        // const Obj = promptUser();
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