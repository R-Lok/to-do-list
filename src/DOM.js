import headerImageFile from './receipt.png'
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

    const addProjectBtn  = document.createElement('button')
    addProjectBtn.classList.add('btn')
    addProjectBtn.textContent = 'New Project'
    
    sideBarInner.append(addProjectBtn)

    return {addProjectBtn}
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
        formContainerOuter.style.display = 'none'
    }

    return {showProjectForm, hideProjectForm, cancelButton}
})()

export {createHeader, createSidebar, newProjectForm}

