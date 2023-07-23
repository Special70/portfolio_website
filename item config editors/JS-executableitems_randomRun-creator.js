document.body.onload = createNewTextArea()
const frameBoxVar = document.getElementById("frameBox");

function createNewTextArea() {
    console.log("test");
    const randomRunFrame = document.getElementById("RandomRunFrame");
    // Creates extra textareas
    const newTextArea = document.createElement("textarea");
    newTextArea.setAttribute("style", "width: 100%; border: solid 2px darkorange");

    const newNextLine = document.createElement("br");

    const newTextLine = document.createElement("div");
      newTextLine.setAttribute("style","color: darkorange");
      const newNumberInputBox = document.createElement("input");
      newNumberInputBox.setAttribute("type","number");
      newNumberInputBox.setAttribute("style","width: 10%; border: solid 2px darkorange");
      newNumberInputBox.setAttribute("value","0");

      const text001 = document.createTextNode("  RNG Chance:");
      newTextLine.append(newNumberInputBox, text001);

    randomRunFrame.append(newNextLine, newTextLine, newTextArea);
}


const checkForInputs = frameBoxVar.querySelectorAll("input");

checkForInputs.forEach(inputAction => {
    inputAction.innerHTML = 0;
})

