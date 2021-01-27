
document.getElementById('login').addEventListener("click", function(){
    axios.post('http://localhost:3000/api/auth/login', {
      email: document.getElementById('login_email').value,
      password: document.getElementById('login_password').value
    })
    .then(function (response) {
      if (response.data && response.data.token) {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('email', response.data.email)
        localStorage.setItem('name', response.data.name)
        goHome()
      } else {
        alert('Wrong credentials. Try again.')
      }
    })
    .catch(function (error) {
      alert('Wrong credentials. Try again.')
    });
  })
  
  /*
  function goHome(){
    window.location = "http://localhost:3000/home.html"
  }*/
  