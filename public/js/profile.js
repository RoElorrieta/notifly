const api = axios.create({
    baseURL: "http://localhost:3000/api",
    timeout: 3000
  });

  api
    .get('/users/me', {headers: localStorage.token})

const createElement = (date, route, flight) => {
    let div = document.createElement("div");
    div.setAttribute("class", "d-flex w-100 justify-content-between");
    div.setAttribute("id", "list-group-element");
    div.innerHTML = `<h5>Showing flights for date:${date}</h5>
    <small>${route}</small>`;
    let p = document.createElement("p");
    p.setAttribute("class", "mb-1");
    p.innerHTML = `Flight code: ${flight}`;
    let small = document.createElement("small");
    small.setAttribute("class", "small");
    return div;
}

window.onload= function(){
    document
        .getElementsByClassName("list-group")
        .appendChild(createElement(flight.date, flight.route, flight))
}

