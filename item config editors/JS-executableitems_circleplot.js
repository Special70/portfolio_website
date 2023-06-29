function refreshButton() {
    let circleRadius = document.getElementById("CircleRadius").value;
    let circleRate = document.getElementById("CircleRate").value;
    let circleSymbolX = document.getElementById("CircleSymbolX").value;
    let circleSymbolY = document.getElementById("CircleSymbolY").value;
    let circleSymbolYExtraValue = parseFloat(document.getElementById("CircleSymbolY-Add").value);
    let circleCommand = document.getElementById("CircleCommandBox").value;

    let symbolX_Regex = new RegExp(circleSymbolX, ""); 
    let symbolY_Regex = new RegExp(circleSymbolY, ""); 

    // Erases the output box when pressing the refersh button again
    document.getElementById("CircleOutputBox").innerHTML = "";

    // Computes the degrees value of each rate (particle point)
    let rateCounter = Math.round(100*(360/circleRate))/100;
    let rateArray = [];
    if (!(circleRate == "")) {

        let degreesValue = 0;
        // Makes sure that when adding up the rateCounter everytime, it doesn't go over 360 degrees
        for (let i = 0; i < 360; i+=rateCounter) {
        degreesValue += rateCounter;
        // This is just for the array stuff to display the FOR LOOP version
        rateArray.push(degreesValue);
        // Offset Formula
        let xOffset = (circleRadius*Math.sin(degreesValue*-1)*Math.cos(0*-1));
        let yOffset = ((circleRadius*Math.cos(degreesValue*-1)*Math.cos(0*-1))+circleSymbolYExtraValue);
        // Replaces the current text with said symbols
        let displayCommand = circleCommand.replace(symbolX_Regex, xOffset).replace(symbolY_Regex, yOffset);
        // Adds the text to the textarea
        document.getElementById("CircleOutputBox").innerHTML += displayCommand+"\n";
        }
    }
    // For the For Loop Box of the Circle Offset Creator
    document.getElementById("CircleForLoopBox").innerHTML = "FOR ["+rateArray+"] > for1";
    //-----------------------------------------------------------------------------------------------//

    
}

function copyToClipBoard() {
    document.getElementById("TextBesidesCopyButton").innerHTML = "  Copied!";

    const circleOutputBox = document.getElementById("CircleOutputBox");
    circleOutputBox.select();
    circleOutputBox.setSelectionRange(0, circleOutputBox.value.length);
    document.execCommand('copy');
    circleOutputBox.blur;
}