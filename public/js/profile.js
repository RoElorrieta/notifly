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
        profile.data.flights.forEach(flight => {
            let a = document.createElement("a")
            a.classList.add("list-group-item", "list-group-item-action")
            a.innerHTML = `
            <div class="d-flex w-100 justify-content-between" id= "element">
            <h5 class="mb-1" id="header">Operating flight</h5>
            <small id="date"></small>
            <small id="route"></small>
            </div>
            <p class="mb-1" id="info-fleet"></p>
            <p class="mb-1" id="info-registration"></p>
            <p class="mb-1" id="info-length"></p>
            <p class="mb-1" id="info-pax"></p>
            <small id="code"></small>`
            div.appendChild(a)
        });
        let i= 0
        document.getElementById("route").innerText = profile.data.flights[i].route
        document.getElementById("info-fleet").innerText = profile.data.flights[i].fleet
        document.getElementById("info-registration").innerText = profile.data.flights[i].registration
        document.getElementById("info-length").innerText = profile.data.flights[i].length
        document.getElementById("info-pax").innerText = profile.data.flights[i].pax
        i++
    })
    .catch(err => {
        document.getElementById("name").innerText = "Could not load crew info"
    })
}