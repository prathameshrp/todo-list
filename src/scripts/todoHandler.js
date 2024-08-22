import promptUser from "./inputHandler";
class ToDoList
{
    constructor(listTitle)
    {
        this.listTitle = listTitle;
        this.allToDoTasks = [];
    }
    createTask(title, desc) {
        // const Obj = promptUser();
        const newTask = new ToDoTask(title);
        newTask.setDescription(desc);
        newTask.setDate(new Date());
        this.allToDoTasks.push(newTask);
    }
    setDescription(description)
    {
        this.description = description;
    }
    getAllTasks()
    {
        // this.allToDoTasks.forEach((task)=>{
        //     console.log(task.title);
        //     console.log(task.getDate());
        //     console.log(task.getDescription());
        //     });
        return this.allToDoTasks;
    }
    getListName()
    {
        return this.listTitle;
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

    getTitle()
    {
        return this.title;
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