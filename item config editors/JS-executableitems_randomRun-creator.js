const cmdAdderButton = document.getElementById("RandomRun-ADD-CMD-FIELD");

cmdAdderButton.addEventListener("click", function() {
    console.log("test");
    const randomRunFrame = document.getElementById("RandomRunFrame");
    // Creates extra textareas
    const newTextArea = document.createElement("textarea");
    newTextArea.setAttribute("style", "resize: none; width: 100%; border: solid 2px darkorange");

    const newNumberInputBox = document.createElement("input");
    newNumberInputBox.setAttribute("type","number");

    const newNextLine = document.createElement("br");

    randomRunFrame.appendChild(newNextLine);
    randomRunFrame.appendChild(newTextArea);
})