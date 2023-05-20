let numberOfClicks = 0;

document.getElementById("button1").onclick = function() {
    numberOfClicks++;
    document.getElementById("label2").innerHTML = "You pressed the button "+numberOfClicks+" times!";
    console.log("Test "+numberOfClicks);
}
