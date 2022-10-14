function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
  
  }
  
  const x = document.getElementById('hamburgerBtn')
  x.onclick = toggleMenu;

  //--- Banner ---//
  const today = new Date();
  console.log(today);
  
const dayNumber = today.getDay();
console.log(dayNumber);
const element = document.getElementById("banner");

if (dayNumber == 1 || dayNumber == 2 ) {
    element.classList.add("showme");
} else {
    element.classList.add("hideme");
}