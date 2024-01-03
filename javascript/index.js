function updateTime () {

let honoluluElement = document.querySelector("#honolulu");
let honoluluDateElement = honoluluElement.querySelector(".date");
let honoluluTimeElement = honoluluElement.querySelector(".time");
let honoluluTime = moment().tz("Pacific/Honolulu")

honoluluDateElement.innerHTML = honoluluTime.format("MMMM Do, YYYY");
honoluluTimeElement.innerHTML = honoluluTime.format("h:mm:ss [<small>]A[</small>]"
);



let sanJoseElement = document.querySelector("#san-jose");
let sanJoseDateElement = sanJoseElement.querySelector(".date");
let sanJoseTimeElement = sanJoseElement.querySelector(".time");
let sanJoseTime = moment().tz("America/Costa_Rica");

sanJoseDateElement.innerHTML = sanJoseTime.format("MMMM Do, YYYY");
sanJoseTimeElement.innerHTML = sanJoseTime.format(
	"h:mm:ss [<small>]A[</small>]"
);

let limaElement = document.querySelector("#lima");
let limaDateElement = limaElement.querySelector(".date");
let limaTimeElement = limaElement.querySelector(".time");
let limaTime = moment().tz("America/Lima");

limaDateElement.innerHTML = limaTime.format("MMMM Do, YYYY");
limaTimeElement.innerHTML = limaTime.format(
	"h:mm:ss [<small>]A[</small>]"
);


let santoriniElement = document.querySelector("#santorini");
let santoriniDateElement = santoriniElement.querySelector(".date");
let santoriniTimeElement = santoriniElement.querySelector(".time");
let santoriniTime = moment().tz("Europe/Athens");

santoriniDateElement.innerHTML = santoriniTime.format("MMMM Do, YYYY");
santoriniTimeElement.innerHTML = santoriniTime.format(
	"h:mm:ss [<small>]A[</small>]"
);
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];

    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `  
    <div class="city">
    <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.
    format(
    "A"
    )}</small></div>
</div>
    `;
}
    

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);