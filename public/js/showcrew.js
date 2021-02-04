const api = axios.create({
    baseURL: "http://localhost:3000/api",
    timeout: 3000
  });

window.onload= function() {

  api
    .get('/admin/all', {headers: {token:localStorage.token}})
    .then(crew => {
        document.getElementById("name").innerText = crew.data.name
        document.getElementById("checkid").innerText = crew.data.checkID
        document.getElementById("mail").innerText = crew.data.mail
        document.getElementById("base").innerText = "TFS"
        document.getElementById("rank").innerText = "CCM"
        const div = document.getElementById("main")
        crew.data.forEach((credentials, i) => {
            let a = document.createElement("a")
            a.classList.add("list-group-item", "list-group-item-action")
            a.innerHTML = `
            <div class="d-flex w-100 justify-content-between" id= "element${i}">
            <h5 class="mb-1" id="header${i}">Crew info</h5>
            <small id="rank${i}"></small>
            </div>
            <p class="mb-1" id="name${i}"></p>
            <p class="mb-1" id="mail${i}"></p>
            <p class="mb-1" id="checkid${i}"></p>
            <p class="mb-1" id="base${i}"></p>`
            div.appendChild(a)
        })
    })
    .catch(err => {
        document.getElementById("name").innerText = "Could not load crew info"
    })
}