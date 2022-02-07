
const mediaQuery800px = window.matchMedia("(max-width: 800px)");


function getInnerWidth(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
}

function resize(){
    if(window.innerWidth>800){
        document.querySelector(".downChev").style.display = "none";
        document.querySelector(".upChev").style.display = "none";
    } else if(window.innerWidth<=800 && document.querySelector(".downChev").style.display === "block"){
        document.querySelector(".downChev").style.display = "none";
        document.querySelector(".upChev").style.display = "block";
    }
    getInnerWidth();
}

window.onresize = resize;

function clickOnGCSE(){
    if (document.getElementById("changeGCSEhtml").innerHTML === "GCSE" && window.innerWidth<=800){
        document.querySelector(".GCSENav").style.display = "block";
        document.querySelector(".downChev").style.display = "none";
        document.querySelector(".upChev").style.display = "block";
        document.getElementById("changeGCSEhtml").innerHTML = "GCSE ";
        
    } else if(document.getElementById("changeGCSEhtml").innerHTML === "GCSE " && window.innerWidth<=800){
        document.querySelector(".GCSENav").style.display = "none";
        document.querySelector(".downChev").style.display = "block";
        document.querySelector(".upChev").style.display = "none";
        document.getElementById("changeGCSEhtml").innerHTML = "GCSE"
    } else if(document.getElementById("changeGCSEhtml").innerHTML === "GCSE" && window.innerWidth>800){
        document.querySelector(".GCSENav").style.display = "block";
        document.querySelector(".downChev").style.display = "none";
        document.querySelector(".upChev").style.display = "none";
        document.getElementById("changeGCSEhtml").innerHTML = "GCSE ";
        
    } else if(document.getElementById("changeGCSEhtml").innerHTML === "GCSE " && window.innerWidth>800){
        document.querySelector(".GCSENav").style.display = "none";
        document.querySelector(".downChev").style.display = "none";
        document.querySelector(".upChev").style.display = "none";
        document.getElementById("changeGCSEhtml").innerHTML = "GCSE"
    } 
    }

document.getElementById("GCSELi").onclick = clickOnGCSE;


if(mediaQuery800px.matches){
document.getElementById("FSLi").onclick = () =>{
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
}

