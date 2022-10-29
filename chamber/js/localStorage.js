const visitor = document.querySelector(".visitor");

let MSinDay = 1000 * 60 * 60 * 24;
let thisday = Date.now();
let numvisitor = Number(localStorage.getItem("visitor"));
let lastVisit = localStorage.getItem('dateVisited');
let daysPassed, difference;

if (numvisitor !== 0) {
    localStorage.setItem("dateVisited", thisday);
    difference = thisday - lastVisit
    daysPassed = Math.round(difference / MSinDay)
    daysPassed = "Welcome, this is your first visit!"
}else {
    localStorage.setItem('visitor', 1)
    localStorage.setItem("dateVisited", thisday);
    daysPassed = "I'm glad you're coming back to visit!"

}

numvisitor++

localStorage.setItem('visitor', numvisitor)

visitor.textContent = daysPassed