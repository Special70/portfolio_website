let circleRadius = document.getElementById("CircleRadius").value;



function downloadCirclePlot() {
    var textToSave = "This is the text to be inserted into the file.";
    var filename = "circle-plot-file.txt";

    // "a" is used to simulate a file download and the rest are for downloading properties
    var element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8,");
    element.setAttribute("download", filename);
  }