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

    if (d.getDay() !== 5) {
        document.getElementById("announcement").classList.toggle("hidden");
    }

    var forecastDays = ["day1", "day2", "day3", "day4", "day5"];

    for (let i = 0; i < forecastDays.length; i++) {
        document.getElementById(forecastDays[i]).innerText = days[(d.getDay() + i) % days.length];
    }
});

const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("responsive");
}