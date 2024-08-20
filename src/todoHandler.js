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

function printToDos()
{
    allTasks.forEach((task)=>{
    console.log(task.title);
    console.log(task.getDate());
    console.log(task.getDescription());
    });

}

const allTasks = [];
function createTask() {
    const t = prompt("Enter title: ", );
    const d = prompt("Enter description: ", );
    const date = new Date();
    const newTask = new ToDoTask(t);
    newTask.setDescription(d);
    newTask.setDate(date);
    allTasks.push(newTask);
}
