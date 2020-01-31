document.addEventListener("DOMContentLoaded", function(){
    let lastModified = document.lastModified;
    let year = new Date().getFullYear();
    document.getElementById('year').innerText = year;
    document.getElementById("lastModified").innerText = lastModified;
});

const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
}