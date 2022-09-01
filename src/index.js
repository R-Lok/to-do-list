import css from "./style.css"
import {createHeader, createSidebar} from "./DOM"
import { add } from "date-fns"

createSidebar()
createHeader()


let projects = {
    list: {},
    add: function(projectName) {
        if (projects.list[projectName] === false) {
            projects.list[projectName]= new project(projectName)
        } else {
            alert('Project already exists!')
        }
    }
}



class project {
    constructor(projectName) {
        this.projectName = projectName
        this.toDoItems = []
    }
    addToDoItem(title, description, dueDate) {
        this.toDoItems.push(new toDoItem(title, description, dueDate))
    }
}

class toDoItem {
    constructor(title, description, dueDate) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
    }
}
