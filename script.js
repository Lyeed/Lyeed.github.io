function swapDiv(div, title)
{
   document.getElementById('perso').style.display = "none";
   document.getElementById('diplomes').style.display = "none";
   document.getElementById('competences').style.display = "none";
   document.getElementById('projets').style.display = "none";

   document.getElementById(div).style.display = "block";
   document.getElementById("subtitle").innerHTML = title;
}
