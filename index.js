let numberOfClicks = 0;

document.getElementById("button1").onclick = function() {
    numberOfClicks++;
    document.getElementById("label1").innerHTML = "You pressed the button "+numberOfClicks+" times!";
}
