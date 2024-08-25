// class for all task instances
// reponsibility: read and write tasks
class ToDoTask
{
    #taskName;
    #description;
    #dueDate;
    #priority; 
    /*
    Priority levels:
    0 - Urgent
    1 - Important
    2 - Necessary
    3 - Trivial
    */
    
    constructor(taskName = "New Task")
    {
        this.#taskName = taskName;
    }

    setDescription(description = "Do X before Y...")
    {
        this.#description = description;
    }

    setDate(date = new Date())
    {
        this.#dueDate = date;
    }

    setPriority(priority = 2)
    {
        this.#priority = priority;
    }

    getPriority()
    {
        return this.#priority;
    }
    getTitle()
    {
        return this.#taskName;
    }
    getDate()
    {
        return this.#dueDate;
    }

    getDescription()
    {
        return this.#description;
    }

    // #decidePriority()
    // {
    //     let priorityText;
    //     switch (this.#priority) {
    //         case 0:
    //             priorityText = 'urgent';
    //             break;
    //         case 1:
    //             priorityText = 'important';
    //             break;
    //         case 2:
    //             priorityText = 'necessary';
    //             break;
    //         case 3:
    //             priorityText = 'trivial';
    //             break;
    //         default:
    //             priorityText = 'Not Defined';
    //             break;
    //     }

    //     return priorityText;
    // }
}

// Note for self:
// Priorities are set using integral type and returned as a string literal
export { ToDoTask };