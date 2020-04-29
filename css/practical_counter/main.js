var counter = 0;
var colorArray = ["rgb(22, 20, 20)", "black", "slategrey", "aquamarine", "palegreen", "skyblue", "azure"];
function increment(num) {
    if (num === 1) {
        counter++;
        changehtml();
    }
    else if (num === 2) {
        counter--;
        changehtml();
    }
}
function changehtml() {
    document.getElementById("counter").innerHTML = ("Counter = " + counter);
    document.body.style.backgroundColor = colorArray[counter];
}