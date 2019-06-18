const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email')
const register = []
const login = document.getElementById('Register')
login.addEventListener('click',(e)=>{
  const obj = {
       registerName: username.value,
       registerPassword: password.value,
       registerEmail: email.value,
  }
  register.push(obj)
  localStorage.setItem('key',JSON.stringify(register))
  console.log(login)
  e.preventDefault(e)
  alert('Registration sucessfull You can now log-in')
  window.location.href = 'file:///home/mrphython/My-to-do-app/form/form.html'
}); 

