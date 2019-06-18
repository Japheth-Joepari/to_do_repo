const loginName= document.querySelector('#loginName')
const loginPassword = document.querySelector('#loginPassword')
const loginbutton = document.querySelector('#loginButton')


loginButton.addEventListener('click', (e)=>{
const latestData = localStorage.getItem('key')
const latestdata2 = JSON.parse(latestData)
latestdata2.map(element =>{
    if(element.registerName == loginName.value ){
        alert('welcome')
        window.location.href ='file:///home/mrphython/My-to-do-app/todo/todo.html'
    }else{
        alert('Invalid Name and Password. dont have an account register?')
        window.location.href= 'file:///home/mrphython/My-to-do-app/register/r.html'
    }
})


console.log(latestdata2)
e.preventDefault()
})
