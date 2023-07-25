let numberOfCreatedCMDFields = 0;
let cmdFieldNumbering = [];
let rngArray = [];
let readjustedRngArray = [];
let rngArraySum = 0;
let rngArrayMultiplier_ForScale = 0;
let stringArray = [];

let longestDecimalLength = 0;

const frameBoxVar = document.getElementById("frameBox");
const randomRunFrameVar = document.getElementById("RandomRunFrame");

document.body.onload = createNewTextArea()


function createNewTextArea() {
    cmdFieldNumbering.push(numberOfCreatedCMDFields);
    const randomRunFrame = document.getElementById("RandomRunFrame");
    // Creates extra textareas
    const newTextArea = document.createElement("textarea");
    newTextArea.setAttribute("style", "width: 100%; border: solid 2px darkorange");
    newTextArea.setAttribute("id","TEXTAREA-BOX="+numberOfCreatedCMDFields)

    const newNextLine = document.createElement("br");
    newNextLine.setAttribute("id","NEXT-LINE="+numberOfCreatedCMDFields)

    const newTextLine = document.createElement("div");
      newTextLine.setAttribute("style","color: darkorange");
      newTextLine.setAttribute("id","TEXT-LINE="+numberOfCreatedCMDFields)
      const newNumberInputBox = document.createElement("input");
      newNumberInputBox.setAttribute("id","INPUT-BOX="+numberOfCreatedCMDFields)
      newNumberInputBox.setAttribute("onclick","neverHitZero("+numberOfCreatedCMDFields+")")
      newNumberInputBox.setAttribute("onkeydown","neverHitZero("+numberOfCreatedCMDFields+")")
      newNumberInputBox.setAttribute("type","number");
      newNumberInputBox.setAttribute("style","width: 40%; border: solid 2px darkorange");
      newNumberInputBox.setAttribute("value","0");

      const text001 = document.createTextNode(" RNG Chance: ");
      const text002 = document.createTextNode(" %");

      const deleteButton = document.createElement("button");
      deleteButton.setAttribute("id","DELETE-BUTTON="+numberOfCreatedCMDFields);
      deleteButton.setAttribute("onclick","deleteCMDField("+numberOfCreatedCMDFields+")");
      deleteButton.setAttribute("style","border: solid 2px darkorange");
        const deleteButtonText = document.createTextNode("X");
        deleteButton.append(deleteButtonText);
      newTextLine.append(deleteButton, text001, newNumberInputBox, text002);

    randomRunFrame.append(newNextLine, newTextLine, newTextArea);
    numberOfCreatedCMDFields++;
}

function neverHitZero(x) {
    let inputValue = document.getElementById("INPUT-BOX="+x);
    setTimeout(function() {
      if (inputValue.value <=0 || inputValue.value == "") {
        document.getElementById("INPUT-BOX="+x).value = 0;
      } 
    }, 1)
}


function reloadOutputBox() {
    // Grabs all value of every input element inside the frameBoxVar div
    rngArray = [];
    const selectAllInputElements = frameBoxVar.querySelectorAll("input") 
  
    selectAllInputElements.forEach(inputElement => {
    rngArray.push(inputElement.value);

    // Adds up the numerical total of all rng numbers
    rngArraySum = 0;
    })
    for (let i = 0; i < rngArray.length; i++) {
      rngArraySum += rngArray[i];
    }

    // Grabs the length of the longest decimal
    // (This is used to multiply all LOOP START and NOTHING* values to achieve more precise RNG.)
    for (let i = 0; i < rngArray.length; i++) {
      let testText = (rngArray[i]+"");
      let testText2 = testText.split(".");
      if (testText.length > 0) {
        testText2.push("0");
      }
      if (testText2[1].length > longestDecimalLength) {
        longestDecimalLength = testText2[1].length;
      }  
    }

    // Grabs all value of every textarea inside the RandomRunFrame div
    stringArray = [];
    const selectAllTextAreaElements = randomRunFrameVar.querySelectorAll("textarea") 

      selectAllTextAreaElements.forEach(textAreaElement => {
      stringArray.push(textAreaElement.value);
    })

    // To reset the textarea upon reload
    document.getElementById("RandomRun-TextArea").innerHTML = "";

    document.getElementById("RandomRun-TextArea").innerHTML += "    commands:"+"\n";
    document.getElementById("RandomRun-TextArea").innerHTML += "    - 'RANDOM RUN: 1'"+"\n";
    for (let i = 0; i < rngArray.length; i++) {
        if (rngArray[i] != 0 && stringArray[i] != "") {
          document.getElementById("RandomRun-TextArea").innerHTML += "    - 'LOOP START: "+parseInt(rngArray[i]*(10**longestDecimalLength))+"'"+"\n";
          document.getElementById("RandomRun-TextArea").innerHTML += "    - "+stringArray[i]+"\n";
          document.getElementById("RandomRun-TextArea").innerHTML += "    - LOOP END"+"\n";
      }
    } 
    if (rngArraySum < 100) {
      document.getElementById("RandomRun-TextArea").innerHTML += "    - NOTHING*"+parseInt((100-rngArraySum)*(10**longestDecimalLength))+""+"\n";
    }
    document.getElementById("RandomRun-TextArea").innerHTML += "    - RANDOM END"+"\n";
    // This variable must be reset to 0 because if it doesn't, it's gonna affect the numbers you place the next time you reload the output box.
    longestDecimalLength = 0;
}

function readjustRNG() {
  rngArray = [];
  readjustedRngArray = [];
  const selectAllInputElements = frameBoxVar.querySelectorAll("input") 
  
  selectAllInputElements.forEach(inputElement => {
  rngArray.push(parseInt(inputElement.value));

  // Adds up the numerical total of all rng numbers
  rngArraySum = 0;
  })
  for (let i = 0; i < rngArray.length; i++) {
    rngArraySum += rngArray[i];
  }

  // Divides 100 by the sum of all rng inputs
  rngArrayMultiplier_ForScale = 100/rngArraySum;

  // Gets the numbers in the rngArray and gets their base values. 
  // And then multiply them by 'rngArrayMultiplier_ForScale' var
  // to achieve the exact RNGs.

  for (let i = 0; i < rngArray.length; i++) {
    if (rngArray[i] == 0) {
      readjustedRngArray.push(0)
    } else readjustedRngArray.push((parseInt(10000*(rngArrayMultiplier_ForScale*rngArray[i])))/10000)
    document.getElementById("INPUT-BOX="+cmdFieldNumbering[i]).value = readjustedRngArray[i];
  }
}

function deleteCMDField(numberInput) {
  const textAreaElement = document.getElementById("TEXTAREA-BOX="+numberInput);
  const inputBoxElement = document.getElementById("INPUT-BOX="+numberInput);
  const nextLineElement = document.getElementById("NEXT-LINE="+numberInput);
  const textLineElement = document.getElementById("TEXT-LINE="+numberInput);
  const deleteButtonElement = document.getElementById("DELETE-BUTTON="+numberInput);

  textAreaElement.remove();
  inputBoxElement.remove();
  nextLineElement.remove();
  textLineElement.remove();
  deleteButtonElement.remove();
  cmdFieldNumbering.splice(cmdFieldNumbering.indexOf(numberInput), 1);
}

function resetAllRNG() {
  const selectAllInputElements = frameBoxVar.querySelectorAll("input") 

  selectAllInputElements.forEach(inputElement => {
  inputElement.value = 0;

  })
}