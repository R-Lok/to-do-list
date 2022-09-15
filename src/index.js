import css from "./style.css"
import {createHeader, createSidebar, newProjectForm} from "./DOM"
import { add } from "date-fns"

createSidebar
createHeader
newProjectForm

const eventListeners = (function() {
    createSidebar.addProjectBtn.addEventListener('click', newProjectForm.showProjectForm)
    newProjectForm.cancelButton.addEventListener('click', newProjectForm.hideProjectForm)
    newProjectForm.submitButton.addEventListener('click', addNewProject)
})()

function addNewProject() {
    projects.add(newProjectForm.getProjectFormInputValue())
    createSidebar.renderProjectsToSidebar()
    newProjectForm.hideProjectForm()
}

function confirmDeleteProject() {
    return confirm('Delete this project? This is an irreversible action.')
}

function deleteProject(clickTarget) {
    if (confirmDeleteProject() === true) {
        let projectToDelete = clickTarget.parentNode.getAttribute('project')
        projects.delete(projectToDelete)
        createSidebar.deleteProjectFromSidebar(clickTarget)
    }
}

let projects = {
    list: {},
    add: function(projectName) {
        if (projects.list[projectName] === undefined) {
            projects.list[projectName]= new project(projectName)
        } else {
            alert('Project already exists!')
        }
    },
    delete: function(projectName) {
        delete projects.list[projectName]
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
 export {projects, deleteProject}