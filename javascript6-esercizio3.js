
function cambiocolori(){
    let r = Math.round(Math.random()*256);
    let g = Math.round(Math.random()*256);
    let b = Math.round(Math.random()*256);

    let rgb = "rgb(" + r + "," + g + "," + b + ")";
    
    document.getElementById("p1").style.color = rgb;
    document.getElementById("p2").style.color = rgb;
    document.getElementById("p3").style.color = rgb;
    

}
       
    
   




function grassetto(){
    document.getElementById("p1").style.fontWeight= "bold";
    document.getElementById("p2").style.fontWeight= "bold";
    document.getElementById("p3").style.fontWeight= "bold";
    
}


let a=true

function transizione() {
    
    if (a == true) {
        a = false;
        document.getElementById("p1").style.display = "none"
        document.getElementById("p2").style.display = "none"
        document.getElementById("p3").style.display = "none"
    }
    else {
        a=true
        document.getElementById("p1").style.display = "block"
        document.getElementById("p2").style.display = "block"
        document.getElementById("p3").style.display = "block"
    }
}