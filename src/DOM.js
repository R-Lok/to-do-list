import headerImageFile from './receipt.png'
let contentContainer = document.querySelector(".content-container")

const createHeader  = function(){
    const header = document.createElement('div')
    header.classList.add('header')

    const headerImage = document.createElement('img')
    headerImage.src = headerImageFile

    const headerText = document.createElement('span')
    headerText.innerText = 'To-do List'

    header.append(headerImage, headerText)
    contentContainer.append(header)
}

const createSidebar = function() {
    const sidebarOuter = document.createElement('div')
    sidebarOuter.classList.add('sidebar', 'outer')

    const sideBarInner = document.createElement('div')
    sideBarInner.classList.add('sidebar', 'inner')

    sidebarOuter.append(sideBarInner)
    contentContainer.append(sidebarOuter)
}

export {createHeader, createSidebar}

