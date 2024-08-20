class ToDoList
{
    constructor(listTitle)
    {
        this.listTitle = listTitle;
        this.allTasks = [];
    }
    createTask() {
        const newTask = promptUser();
        this.allTasks.push(newTask);
    }

    printAllTasks()
    {
        this.allTasks.forEach((task)=>{
            console.log(task.title);
            console.log(task.getDate());
            console.log(task.getDescription());
            });
    }
}
class ToDoTask
{
    constructor(taskTitle)
    {
        this.title = taskTitle;
    }

    setDescription(description)
    {
        this.description = description;
    }

    getDescription()
    {
        return this.description;
    }

    setDate(date)
    {
        this.date = date;
    }
    getDate()
    {
        return this.date;
    }
}


function promptUser()
{
    const t = prompt("Enter title: ", );
    const d = prompt("Enter description: ", );
    const date = new Date();
    const newTask = new ToDoTask(t);
    newTask.setDescription(d);
    newTask.setDate(date);
    return newTask;
}

// const today = new ToDoList("Today");
// const tomorrow = new ToDoList("Tomorrow");
///test code ^

