// Class to store all the to do tasks under single object

class ToDoList
{
    
    #listName;
    #createdDate;
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
        const totasks = this.#todoTaksInThisList.map(e => e.toJSON());
        return JSON.stringify(
            {
                listName: this.#listName,
                todoTaksInThisList: totasks,
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