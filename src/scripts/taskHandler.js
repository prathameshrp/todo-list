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
    constructor(taskName)
    {
        this.#taskName = taskName;
    }

    setDescription(description)
    {
        this.#description = description;
    }

    getTitle()
    {
        return this.#taskName;
    }
    getDescription()
    {
        return this.#description;
    }

    setDate(date)
    {
        this.#dueDate = date;
    }
    getDate()
    {
        return this.#dueDate;
    }

    setPriority(prior)
    {
        this.#priority = prior;
    }
    getPriority()
    {
        return this.#decidePriority();
    }

    #decidePriority()
    {
        let priorityText;
        switch (this.#priority) {
            case 0:
                priorityText = 'urgent';
                break;
            case 1:
                priorityText = 'important';
                break;
            case 2:
                priorityText = 'necessary';
                break;
            case 3:
                priorityText = 'trivial';
                break;
            default:
                priorityText = 'Not Defined';
                break;
        }

        return priorityText;
    }
}

export { ToDoTask };