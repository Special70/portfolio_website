let numberOfClicks = 0;

document.getElementById("button1").onclick = function() {
    numberOfClicks++;
    console.log("Test "+numberOfClicks);
}
