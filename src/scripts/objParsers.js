// module to parse input content as objects
import { ToDoTask } from "./taskHandler"
import { ToDoList } from "./ListHandler";
import { Project } from "./projectHandler";

function parseTaskObj(task) {
    const newTask = new ToDoTask(task["name"]);
    newTask.setDescription(task["description"]);
    newTask.setDate(task["due_date"]);
    newTask.setPriority(parseInt(task["priority"]));

    return newTask;
}

function parseListObj(list) {
    const listName = list["name"];
    const newList = new ToDoList(listName);
    newList.setDate(list["createdDate"]);

    console.log(list)
    list["todoTasksInThisList"].forEach(todo => {
        console.log("To do here, To do here, To do here, To do here \n\n", todo);
        console.log("This is type of todo", typeof todo);
        console.log(JSON.parse(todo));
        const newToDo = parseTaskObj(JSON.parse(todo));
        newList.createTask(newToDo);
    });
    return newList;
}

function parseProjectObj(project)
{
    const projectName = project["name"];
    const newProject = new Project(projectName);
    return newProject;
}
function parseProjectJson(projectJson) {
    const data = JSON.parse(projectJson);
    const project = new Project(data.name);
    console.log("These are the form of lists: ", data["todoListsInThisProject"]);
    data["todoListsInThisProject"].forEach(list => {
        console.log("Blah BlahBlahBlahBlahBlahBlahBlahBlah",list);
        console.log(JSON.parse(list));

        const newList = parseListObj(JSON.parse(list));
        project.createList(newList);
    });
    return project;
}
export {
    parseTaskObj, 
    parseListObj,
    parseProjectObj,
    parseProjectJson,
}; 