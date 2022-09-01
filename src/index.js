import css from "./style.css"
import {createHeader, createSidebar} from "./DOM"
import { add } from "date-fns"

createSidebar()
createHeader()


let projects = {
    list: {},
    add: function(projectName) {
        projects.list[projectName] = new project(projectName)
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

projects.add('hi')
projects.list.hi.addToDoItem('buy food', 'go shop at walmart', 'Nov 16')
console.log(projects.list.hi.toDoItems)

console.log(projects)

console.log('test')