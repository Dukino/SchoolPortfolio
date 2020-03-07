const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

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
    WebFont.load({
        google: {
            families: [
                'Open Sans', 'Roboto'
            ]
        }
    });




});

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Preston" ||
                towns[i].name == "Fish Haven" ||
                towns[i].name == "Soda Springs") {
                let card = document.createElement('section');
                let data = document.createElement('div');
                let h3 = document.createElement('h3');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let image = document.createElement('img');

                h3.textContent = towns[i].name;
                p1.textContent = "Motto: " + towns[i].motto;
                p2.textContent = "Year Founded: " + towns[i].yearFounded;
                p3.textContent = "Annual Rainfall: " + towns[i].averageRainfall;
                image.setAttribute('src', "images/" + towns[i].photo);
 
                data.appendChild(h3);
                data.appendChild(p1);
                data.appendChild(p2);
                data.appendChild(p3);
                card.appendChild(data);
                card.appendChild(image);

                document.querySelector('div.cards').appendChild(card);
            }

        }
    });

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("responsive");
}