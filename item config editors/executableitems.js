


const forLoopButton = document.getElementById("forLoopButton");

forLoopButton.addEventListener("click", function() {
    let startValue = document.getElementById("ForLoop_StartValue").value;
    let incrementValue = document.getElementById("ForLoop_IncrementValue").value;
    let incrementAmount = document.getElementById("ForLoop_IncrementAmount").value;

    let numberRegex = /^[0-9]+$/;
    if (numberRegex.test(startValue) && numberRegex.test(incrementValue)) {
        startValue = parseInt(startValue);
        incrementValue = parseInt(incrementValue);
    }

    let loopValue = startValue;
    let forLoopArray = [];

    for (let i = 0; i < incrementAmount; i++) {
        forLoopArray.push(loopValue+" ");
        loopValue+=incrementValue;
    }

    document.getElementById("forLoop_textArea").innerHTML = "FOR ["+forLoopArray+"] > for1";
})