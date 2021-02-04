const api = axios.create({
    baseURL: "http://localhost:3000/api",
    timeout: 3000
  });

window.onload= function() {

  api
    .get('/users/me', {headers: {token:localStorage.token}})
    .then(profile => {
        document.getElementById("name").innerText = profile.data.name
        document.getElementById("checkid").innerText = profile.data.checkID
        document.getElementById("mail").innerText = profile.data.mail
        document.getElementById("base").innerText = "TFS"
        const div = document.getElementById("main")
        profile.data.flights.forEach((flight, i) => {
            let a = document.createElement("a")
            a.classList.add("list-group-item", "list-group-item-action")
            a.innerHTML = `
            <div class="d-flex w-100 justify-content-between" id= "element${i}">
            <h5 class="mb-1" id="header${i}">Operating flight</h5>
            <small id="date${i}"></small>
            <small id="route${i}"></small>
            </div>
            <p class="mb-1" id="info-fleet${i}"></p>
            <p class="mb-1" id="info-registration${i}"></p>
            <p class="mb-1" id="info-length${i}"></p>
            <p class="mb-1" id="info-pax${i}"></p>
            <small id="code${i}"></small>`
            console.log(a)
            div.appendChild(a)

            document.getElementById(`route${i}`).innerText =flight.route
            document.getElementById(`info-fleet${i}`).innerText =flight.fleet
            document.getElementById(`info-registration${i}`).innerText =flight.registration
            document.getElementById(`info-length${i}`).innerText =flight.length
            document.getElementById(`info-pax${i}`).innerText =flight.PAX
        })
    })
    .catch(err => {
        document.getElementById("name").innerText = "Could not load crew info"
    })
}