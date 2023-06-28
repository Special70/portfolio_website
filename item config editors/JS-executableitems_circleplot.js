function refreshButton() {
    let circleRadius = document.getElementById("CircleRadius").value;
    let circleRate = document.getElementById("CircleRate").value;
    let circleSymbolX = document.getElementById("CircleSymbolX").value;
    let circleSymbolY = document.getElementById("CircleSymbolY").value;
    let circleCommand = document.getElementById("CircleCommandBox").value;

    let symbolX_Regex = new RegExp(circleSymbolX, "g"); 
    let displayCommand = circleCommand.replace(symbolX_Regex, "");
    document.getElementById("CircleOutputBox").innerHTML = displayCommand;
    console.log(displayCommand+" | "+circleSymbolX);
}

function downloadCirclePlot() {
    var textToSave = "This is the text to be inserted into the file.";
    var filename = "circle-plot-file.txt";

    // "a" is used to simulate a file download and the rest are for downloading properties
    var element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8,");
    element.setAttribute("download", filename);
}