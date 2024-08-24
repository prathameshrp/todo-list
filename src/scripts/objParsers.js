// module to parse input content as objects
import { ToDoTask } from "./taskHandler"
import { ToDoList } from "./ListHandler";
import { Project } from "./projectHandler";

function parseTaskObj(task) {
    const newTask = new ToDoTask(task["name"]);
    newTask.setDescription(task["description"]);
    newTask.setDate(task["due_date"]);
    newTask.setPriority(task["priority"]);

    return newTask;
}

function parseListObj(list) {
    const listName = list["name"];
    const newList = new ToDoList(listName);
    return newList;
}

function parseProjectObj(project)
{
    const projectName = project["name"];
    const newProject = new Project(projectName);
    return newProject;
}
export {
    parseTaskObj, 
    parseListObj,
    parseProjectObj,
};