import css from "./style.css"
import {createHeader, createSidebar, newProjectForm, mainContainer, newToDoForm} from "./DOM"
import { add } from "date-fns"

createSidebar
createHeader
newProjectForm

const eventListeners = (function() {
    createSidebar.addProjectBtn.addEventListener('click', newProjectForm.showProjectForm)
    newProjectForm.cancelButton.addEventListener('click', newProjectForm.hideProjectForm)
    newProjectForm.submitButton.addEventListener('click', addNewProject)
    mainContainer.newTodoButton.addEventListener('click', newToDoForm.showToDoForm)
    newToDoForm.cancelButton.addEventListener('click', newToDoForm.clearInputsAndHideForm)
    newToDoForm.submitButton.addEventListener('click', addNewToDo)
})()

function saveProjectsToLocalStorage() {
    localStorage.setItem('projectslist', JSON.stringify(projects.list))
}

function getProjectsFromLocalStorage() {
    if (localStorage.getItem('projectslist') !== null)
    projects.list = JSON.parse(localStorage.getItem('projectslist'))
}

function addNewProject() {
    if (newProjectForm.getProjectFormInputValue() === "") {
        alert('Project name cannot be empty!')
    } else {
        projects.add(newProjectForm.getProjectFormInputValue())
        createSidebar.renderProjectsToSidebar()
        newProjectForm.hideProjectForm()
        saveProjectsToLocalStorage()
    }
}

function confirmDeleteProject() {
    return confirm('Delete this project? This is an irreversible action.')
}

function deleteProject(clickTarget) {
    if (confirmDeleteProject() === true) {
        let projectToDelete = clickTarget.parentNode.getAttribute('project')
        projects.delete(projectToDelete)
        createSidebar.deleteProjectFromSidebar(clickTarget)
        saveProjectsToLocalStorage()
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

function addNewToDo() {
    let input = newToDoForm.getFormValues()
    let currentProject = mainContainer.newTodoButton.getAttribute('currentproject')
    let currentProjectLocation = projects.list[currentProject]

    if (input.title === '') {
        alert('Please enter a title for the to-do.')
    } else {
        currentProjectLocation.addToDoItem(input.title, input.description, input.dueDate)
        newToDoForm.clearInputsAndHideForm()
        mainContainer.renderProjectTodos(currentProject)
        saveProjectsToLocalStorage()
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

getProjectsFromLocalStorage()
createSidebar.renderProjectsToSidebar()
console.log(projects)


 export {projects, deleteProject}