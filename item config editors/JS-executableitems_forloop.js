let numberRegex = /^[0-9]+$/;

const forLoopButton = document.getElementById("forLoopButton");

forLoopButton.addEventListener("click", function() {
    let startValue = document.getElementById("ForLoop_StartValue").value;
    let incrementValue = document.getElementById("ForLoop_IncrementValue").value;
    let incrementAmount = document.getElementById("ForLoop_IncrementAmount").value;

    startValue = parseFloat(startValue);
    incrementValue = parseFloat(incrementValue);

    let loopValue = (startValue);
    let forLoopArray = [];

    for (let i = 0; i < incrementAmount; i++) {
        forLoopArray.push(parseFloat(loopValue).toFixed(3)+" ");
        loopValue+=incrementValue;
    }

    document.getElementById("forLoop_textArea").innerHTML = "FOR ["+forLoopArray+"] > for1";
})
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
const ForLoop_IncrementAmount = document.getElementById("ForLoop_IncrementAmount");

ForLoop_IncrementAmount.addEventListener("click", function() {
    let incrementAmount = parseInt(document.getElementById("ForLoop_IncrementAmount").value);
    if (incrementAmount <= 0) {
        document.getElementById("ForLoop_IncrementAmount").value = 0;
    } 
})

ForLoop_IncrementAmount.addEventListener("keypress", function(event) {
    if (event.key == "+" || event.key == "-") {
        event.preventDefault();
    }
})

