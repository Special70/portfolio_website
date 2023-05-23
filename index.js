let numberOfClicks = 0;

document.getElementById("button1").onclick = function() {
    numberOfClicks++;
    document.getElementById("label2").innerHTML = "You pressed the button "+numberOfClicks+" times!";
    console.log("Test "+numberOfClicks);
}
function add(type) {

    //Create an input type dynamically.
    var element = document.createElement("input");
    var text = document.getElementById("textId");

    //Append the element in page (in span).
    text.appendChild(element);

}