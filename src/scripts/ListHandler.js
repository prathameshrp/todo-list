// Class to store all the to do tasks under single object

class ToDoList
{
    #listName;
    #createdDate
    #todoTaksInThisList = [];
    constructor(listName = "New List")
    {
        this.#listName = listName;
        this.#createdDate = new Date();
    }

    createTask(taskObj) {
        // const Obj = promptUser();
        this.#todoTaksInThisList.push(taskObj);
    }

    getAllTasks()
    {
        return this.#todoTaksInThisList;
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
        if(this.#todoTaksInThisList.length === 0) return;
        this.#todoTaksInThisList.splice(index, 1);
    }
}

// const today = new ToDoList("Today");
// const tomorrow = new ToDoList("Tomorrow");
///test code ^

export {ToDoList};