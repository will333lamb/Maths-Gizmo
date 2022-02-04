let GCSELi = document.getElementById("GCSELi");

GCSELi.addEventListener("click", listGCSE);

function listGCSE(){
    if (document.getElementById("changeGCSEhtml").innerHTML === "GCSE"){
        document.querySelector(".GCSENav").style.display = "block";
        document.querySelector(".downChev").style.display = "none";
        document.querySelector(".upChev").style.display = "block";
        document.getElementById("changeGCSEhtml").innerHTML = "GCSE ";
        
    } else if(document.getElementById("changeGCSEhtml").innerHTML === "GCSE "){
        document.querySelector(".GCSENav").style.display = "none";
        document.querySelector(".downChev").style.display = "block";
        document.querySelector(".upChev").style.display = "none";
        document.getElementById("changeGCSEhtml").innerHTML = "GCSE"
    }
    
}