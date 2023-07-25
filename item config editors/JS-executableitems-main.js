document.onload = toggleDivs();
function toggleDivs(x) {
    const divBoxes1 = document.getElementById("FOR-LOOP-CREATOR");
    const divBoxes2 = document.getElementById("CIRCLE-OFFSET-CREATOR");
    const divBoxes3 = document.getElementById("RANDOM-RUN-CREATOR");
    divBoxes1.style.display = "none";
    divBoxes2.style.display = "none";
    divBoxes3.style.display = "none";

    switch (x) {
       case 1: 
         divBoxes1.style.display = "block";
         break;
       case 2: 
         divBoxes2.style.display = "block";
         break;
       case 3: 
         divBoxes3.style.display = "block";
         break;
    }
}