import headerImageFile from './receipt.png'
import {projects, deleteProject} from './index'
let contentContainer = document.querySelector(".content-container")

const createHeader  = (function(){
    const header = document.createElement('div')
    header.classList.add('header')

    const headerImage = document.createElement('img')
    headerImage.src = headerImageFile

    const headerText = document.createElement('span')
    headerText.innerText = 'To-do List'

    header.append(headerImage, headerText)
    contentContainer.append(header)
})()

const createSidebar = (function() {
    const sidebarOuter = document.createElement('div')
    sidebarOuter.classList.add('sidebar', 'outer')

    const sideBarInner = document.createElement('div')
    sideBarInner.classList.add('sidebar', 'inner')

    sidebarOuter.append(sideBarInner)
    contentContainer.append(sidebarOuter)

    const projectContainer = document.createElement('div')
    projectContainer.classList.add('project-container')

    const addProjectBtn  = document.createElement('button')
    addProjectBtn.classList.add('btn')
    addProjectBtn.textContent = 'New Project'
    
    sideBarInner.append(projectContainer, addProjectBtn)

    function renderProjectsToSidebar() {
        for (const project in projects.list) {
            if (document.querySelector(`[project=${projects.list[project].projectName}]`) === null) {
                const projectNameContainer = document.createElement('div')
                const projectName = document.createElement('span')
                projectNameContainer.classList.add('sidebar-project-container')
                projectNameContainer.setAttribute('project', `${projects.list[project].projectName}`)
                projectNameContainer.addEventListener('click', (e) => {
                    const targetProject = e.target.getAttribute('project')
                    mainContainer.setAddTodoButtonProject(targetProject)
                    mainContainer.renderProjectTodos(targetProject)
                })

                const deleteProjectButton = document.createElement('div')
                deleteProjectButton.addEventListener('click', (e) => deleteProject(e.target))

                projectName.innerText = projects.list[project].projectName
                deleteProjectButton.innerText = 'X'
                deleteProjectButton.classList.add('delete-project-btn')
                projectNameContainer.append(projectName, deleteProjectButton)
                projectContainer.append(projectNameContainer)
            } 
        }
    }

    function deleteProjectFromSidebar(clickTarget) {
        clickTarget.parentElement.remove()
    }
    return {addProjectBtn, renderProjectsToSidebar, deleteProjectFromSidebar}
})()

const mainContainer = (function(){
    const mainContainerOuter = document.createElement('div')
    mainContainerOuter.classList.add('main-container', 'outer')
    const mainContainerInner = document.createElement('div')
    mainContainerInner.classList.add('main-container', 'inner')

    const todoDisplay = document.createElement('div')
    todoDisplay.classList.add('todo-display')
    const newTodoButtonContainer = document.createElement('div')
    newTodoButtonContainer.classList.add('button-container')
    const newTodoButton = document.createElement('button')
    newTodoButton.setAttribute('type', 'button')
    newTodoButton.innerText = 'Add To-do'
    newTodoButton.setAttribute('currentProject', '')

    newTodoButtonContainer.append(newTodoButton)
    mainContainerInner.append(todoDisplay, newTodoButtonContainer)
    mainContainerOuter.append(mainContainerInner)
    contentContainer.append(mainContainerOuter)

    function setAddTodoButtonProject(projectName) {
        newTodoButton.setAttribute('currentProject', projectName)
    }
    
    function removeAllChildElements() {
        while (todoDisplay.hasChildNodes()) {
            todoDisplay.removeChild(todoDisplay.lastChild)
        }
    }
    
    function renderProjectTodos(projectName) {
        const toDoArray = projects.list[projectName].toDoItems
        removeAllChildElements()
        
        for (let i = 0; i < toDoArray.length; i++) {
            const toDoContainer = document.createElement('div')
            const urgencyIndicator = document.createElement('div')
            const textContainer = document.createElement('div')
            const checkBoxContainer = document.createElement('div')

            const todoTitle = document.createElement('span')
            todoTitle.innerText = toDoArray[i].title
            const todoDueDate = document.createElement('span')
            todoDueDate.innerText = toDoArray[i].dueDate

            const checkBox = document.createElement('input')
            checkBox.setAttribute('type', 'checkbox')

            checkBoxContainer.append(checkBox)
            textContainer.append(todoTitle, todoDueDate)
            toDoContainer.append(urgencyIndicator, textContainer, checkBoxContainer)
            todoDisplay.append(toDoContainer)
        }
    }
    return {setAddTodoButtonProject, renderProjectTodos, newTodoButton}
})()

const newProjectForm = (function() {
    const formContainerOuter = document.createElement('div')
    formContainerOuter.classList.add('form-container-outer')
    const formContainerInner = document.createElement('div')
    formContainerInner.classList.add('form-container-inner')

    const projectForm = document.createElement('form')
    const projectFormLabel = document.createElement('label')
    projectFormLabel.setAttribute('for', 'projectName')
    const projectFormInput = document.createElement('input')
    projectFormInput.type = 'text'
    projectFormInput.id = 'projectName'
    projectFormLabel.innerText = 'Project Name'

    const submitButton = document.createElement('button')
    submitButton.classList.add('form-button', 'project-submit-btn')
    submitButton.setAttribute('type', 'button')
    submitButton.innerText = 'Submit'

    const cancelButton = document.createElement('button')
    cancelButton.classList.add('form-button', 'project-cancel-btn')
    cancelButton.setAttribute('type', 'button')
    cancelButton.innerText = 'Cancel'

    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('button-container')

    buttonContainer.append(submitButton, cancelButton)
    projectForm.append(projectFormLabel, projectFormInput, buttonContainer)
    formContainerOuter.append(formContainerInner)
    formContainerInner.append(projectForm)
    contentContainer.append(formContainerOuter)

    function showProjectForm() {
        formContainerOuter.style.display = 'flex'
    }

    function hideProjectForm() {
        clearProjectFormInput()
        formContainerOuter.style.display = 'none'
    }

    function clearProjectFormInput() {
        projectFormInput.value = ""
    }

    function getProjectFormInputValue() {
        return projectFormInput.value
    }

    return {showProjectForm, hideProjectForm, cancelButton, submitButton, getProjectFormInputValue}
})()

const newToDoForm = (function() {
    const formContainerOuter = document.createElement('div')
    formContainerOuter.classList.add('form-container-outer')
    const formContainerInner = document.createElement('div')
    formContainerInner.classList.add('form-container-inner')

    const toDoForm = document.createElement('form')

    const titleLabel = document.createElement('label')
    titleLabel.innerText = 'Title'
    titleLabel.setAttribute('for', 'to-do-title')
    const titleInput = document.createElement('input')
    titleInput.required = true
    titleInput.setAttribute('type', 'text')
    titleInput.id = 'to-do-title'

    const descriptionLabel = document.createElement('label')
    descriptionLabel.innerText = 'Description'
    descriptionLabel.setAttribute('for', 'to-do-description')
    const descriptionInput = document.createElement('textarea')
    descriptionInput.id = 'to-do-description'

    const dueDateLabel = document.createElement('label')
    dueDateLabel.innerText = 'Due date'
    dueDateLabel.setAttribute('for', 'to-do-due-date')
    const dueDateInput = document.createElement('input')
    dueDateInput.setAttribute('type', 'date')
    dueDateInput.id = 'to-do-due-date'

    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('button-container')

    const submitButton = document.createElement('button')
    submitButton.innerText = 'Submit'
    submitButton.setAttribute('type', 'button')
    submitButton.classList.add('form-button')

    const cancelButton = document.createElement('button')
    cancelButton.innerText = 'Cancel'
    cancelButton.setAttribute('type', 'button')
    cancelButton.classList.add('form-button')

    buttonContainer.append(submitButton, cancelButton)
    toDoForm.append(titleLabel, titleInput, descriptionLabel, descriptionInput, dueDateLabel, dueDateInput, buttonContainer)
    formContainerInner.append(toDoForm)
    formContainerOuter.append(formContainerInner)
    contentContainer.append(formContainerOuter)

    function showToDoForm() {
        formContainerOuter.style.display = 'flex'
    }

    function hideToDoForm() {
        formContainerOuter.style.display = 'none'
    }

    function clearInputsAndHideForm() {
        titleInput.value = ""
        descriptionInput.value = ""
        dueDateInput.value = ""
        hideToDoForm()
    }

    function getFormValues() {
        const title = titleInput.value
        const description = descriptionInput.value
        const dueDate = dueDateInput.value

        return {title, description, dueDate}
    }

    return {showToDoForm, hideToDoForm, cancelButton, submitButton, clearInputsAndHideForm, getFormValues}
})()

export {createHeader, createSidebar, newProjectForm, mainContainer, newToDoForm}

