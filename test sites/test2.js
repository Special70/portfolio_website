const targetDiv = document.getElementById("third");
const btn = document.getElementById("toggle");
btn.onclick = function () {
    targetDiv.setAttribute("style","display: none");
    console.log("wawa");
};