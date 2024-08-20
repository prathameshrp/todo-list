import promptUser from "./inputHandler";
class ToDoList
{
    constructor(listTitle)
    {
        this.listTitle = listTitle;
        this.allToDoTasks = [];
    }
    createTask() {
        const Obj = promptUser();
        const newTask = ToDoTask(Obj.t);
        newTask.setDescription(Obj.d);
        newTask.setDate(date);
        this.allToDoTasks.push(newTask);
    }
    setDescription(description)
    {
        this.description = description;
    }
    printAllTasks()
    {
        this.allToDoTasks.forEach((task)=>{
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


// const today = new ToDoList("Today");
// const tomorrow = new ToDoList("Tomorrow");
///test code ^

export {ToDoList};