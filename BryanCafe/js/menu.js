const name = document.getElementById('name')
const email = document.getElementById('email')
const last = document.getElementById('last')
const subject = document.getElementById('subject')
const body = document.getElementById('body')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) =>{
    let messages =[]

    if(email.value === null){
        messages.push('Name is required')
    }

    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join (', ')
    }

    if(name.value === null){
        messages.push('Name is required')
    }

    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join (', ')
    }

    if(last.value === null){
        messages.push('Name is required')
    }

    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join (', ')
    }

    if(subject.value === null){
        messages.push('Name is required')
    }

    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join (', ')
    }

    if(body.value === null){
        messages.push('Name is required')
    }

    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join (', ')
    }
})