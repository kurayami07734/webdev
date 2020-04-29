var hours = Date().getHours();
if (hours >= 4 && hours <= 10) {
    document.getElementById("text").innerHTML = "Good Morning";
    document.getElementById("img").src = "img/morning.jpg";
}
else if (hours >= 11 && hours <= 18) {
    document.getElementById("text").innerHTML = "Good Afternoon";
    document.getElementById("img").src = "img/afternoon.jpg";
}
else if (hours >= 19 && hours <= 24) {
    document.getElementById("text").innerHTML = "Good Night";
    document.getElementById("img").src = "img/night.jpg";
}