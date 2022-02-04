

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

function listFS(){
    if (document.getElementById("changeFShtml").innerHTML === "Functional Skills"){
        document.querySelector(".FSNav").style.display = "block";
        document.querySelector(".FSdownChev").style.display = "none";
        document.querySelector(".FSupChev").style.display = "block";
        document.getElementById("changeFShtml").innerHTML = "Functional Skills ";
        
    } else if(document.getElementById("changeFShtml").innerHTML === "Functional Skills "){
        document.querySelector(".FSNav").style.display = "none";
        document.querySelector(".FSdownChev").style.display = "block";
        document.querySelector(".FSupChev").style.display = "none";
        document.getElementById("changeFShtml").innerHTML = "Functional Skills";
    }
}

