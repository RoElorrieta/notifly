function createElement() {
    let div = document.createElement("div");
    div.setAttribute("class", "d-flex w-100 justify-content-between");
    div.setAttribute("id", "element");
    div.innerHTML = `<h5>Showing flights for date: </h5>
    <small></small>`;
    let p = document.createElement("p");
    p.setAttribute("class", "mb-1");
    p.innerHTML = `Info del vuelo`;
}

