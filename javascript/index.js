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

updateTime();
setInterval(updateTime, 1000);