let numberOfClicks = 0;

document.getElementById("button1").onclick = function() {
    numberOfClicks++;
    document.getElementById("label2").innerHTML = "You pressed the button "+numberOfClicks+" times!";
    console.log("Test "+numberOfClicks);
}

let numberOfElements = 0;
document.getElementById("CreateField").addEventListener("click", function() {
    const nextLine = document.createElement("br");
    const addElement = document.createElement("textarea");
    numberOfElements++;
    addElement.textContent = "Button #"+numberOfElements;
    addElement.setAttribute("id","NewButton"+numberOfElements);

    const mainElement = document.getElementById("EncaseField");
    mainElement.appendChild(nextLine);
    mainElement.appendChild(addElement);
})