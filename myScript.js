 //Loads conceptDetail function when the content on the page loads
 document.addEventListener("DOMContentLoaded", conceptDetail);

 //Creates Concept Button
 var concepts = ["HTML", "Javascript", "CSS"];
 function conceptDetail() {
     for (var i = 0; i < concepts.length; i++) {
         var btn = document.createElement("button");
         var attr = document.createTextNode(concepts[i]);
         btn.setAttribute("id", concepts[i]);
         btn.setAttribute("class", "concept_btn");
         btn.setAttribute("onClick", "selConcept(this.id)");
         btn.appendChild(attr);

         document.getElementById("concepts").appendChild(btn);
     }
 }

 //Output HTML based on button click
 function selConcept(id) {
     switch (id) {
         case "HTML":
             document.getElementById("output").innerHTML = "HTML";
             document.getElementById("detailOutput").src = "framing.jpg";
             document.getElementById("captionOutput").innerHTML = "HTML is the backbone of the web";
             break;
         case "Javascript":
             document.getElementById("output").innerHTML = "JS";
             document.getElementById("detailOutput").src = "electrical.jpg";
             document.getElementById("captionOutput").innerHTML = "JS powers the internet";
             break;
         case "CSS":
             document.getElementById("output").innerHTML = "CSS";
             document.getElementById("detailOutput").src = "paint.jpg";
             document.getElementById("captionOutput").innerHTML = "CSS makes a site interesting";

             break;
     }
 }

 //contact alert
 var d = new Date();
 function contactUs() {
     alert('Hello!' + " " + d)
 }