
const button = document.getElementById("clicker")

const counter = document.getElementById("counter")

button.addEventListener("click", () => {
    counter.innerHTML = +counter.innerHTML + 1
})