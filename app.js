const grid = document.querySelector(".grid-container");
const taskName = document.querySelector('#task');
const submitButton = document.querySelector('.submit')
const finishedTasks = document.querySelector('.finished-tasks-container');
let finishedTasksParent = document.querySelector('.removed-tasks')
const buttons = document.querySelectorAll("button")

grid.addEventListener('click', (e) => {

    if (e.target.className == 'submit') {
        if (taskName.value == "") {
            alert('Enter a valid task')
        } else {
            let task = document.createElement('li');
            let ol = document.querySelector('ol');
            task.textContent = taskName.value
            ol.appendChild(task);
            addButtonToTasks(task)
            taskName.value = ""
        }
        
    } else if (e.target.className == 'hide') {
        if (finishedTasks.style.display == 'none') {
            finishedTasks.style.display = 'block';
            e.target.textContent = 'Hide finished tasks'
        } else {
            finishedTasks.style.display = 'none'
            e.target.textContent = 'Show all finished tasks'
        }
    } 
})

grid.addEventListener('click', (e) => {
    
    if (e.target.className == 'up') {
        let li = e.target.parentNode
        let ol = li.parentNode
        let prevLi = li.previousElementSibling

        if (!prevLi) {
            
        } else {
            ol.insertBefore(li, prevLi)
        }
    } else if (e.target.className == 'down') {
        let li = e.target.parentNode
        let ol = li.parentNode
        let nextLi = li.nextElementSibling
        
        if (!nextLi) {

        } else {
            ol.insertBefore(nextLi, li)
        }
    }
    
})

grid.addEventListener('click', (event) => {
    
    if (event.target.className == 'finish') {
        let li = event.target.parentNode;
        let ol = li.parentNode
        clonedLi = ol.removeChild(li);
        let newLi = document.createElement('li')
        newLi = clonedLi;
        finishedTasksParent.appendChild(newLi)
        
        for (let i = 0; i < 3; i++) {
            newLi.removeChild(newLi.lastChild)
        }

        let removeButton = document.createElement('button')
        removeButton.textContent = 'Clear from the list'
        removeButton.classList = 'delete'
        newLi.appendChild(removeButton)
    }
})




const addButtonToTasks = (li) => {
    let up = document.createElement('button')
    up.textContent = 'Up'
    up.className = 'up'
    li.appendChild(up)

    let down = document.createElement('button')
    down.textContent = 'Down'
    down.className = 'down'
    li.appendChild(down)

    let finish = document.createElement('button')
    finish.textContent = 'Done'
    finish.className = 'finish'
    li.appendChild(finish)
}


finishedTasks.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
        let li = event.target.parentNode
        let ul = li.parentNode
        ul.removeChild(li)
    }
})