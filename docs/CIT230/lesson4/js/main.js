document.addEventListener("DOMContentLoaded", function () {
    let year = new Date().getFullYear();
    let d = new Date();
    var months = ["January", "February", "March", "April", "May",
        "June", "July", "August", "September", "October", "November",
        "December"
    ];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday"
    ];
    document.getElementById('year').innerText = year;
    document.getElementById("weekday").innerText = days[d.getDay()];
    document.getElementById("fullDate").innerText = d.getDate() + " " +
        months[d.getMonth()] + " " + year;
});

const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("responsive");
}