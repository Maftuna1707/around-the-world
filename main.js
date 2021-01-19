let a = true;
function rus(){
    a=false;
    document.getElementById("russia").style.display = "block";
    document.getElementById("aboutUzb").style.background = "white";
    document.getElementById("aboutUzb").style.color = "black";
}
function uzb(){
    a=false;
    document.getElementById("uzbekistan").style.display = "block";
    document.getElementById("aboutUzb").style.background = "cornflowerblue";
    document.getElementById("aboutUzb").style.color = "white";
    // document.getElementById("uzbekistan").style.zIndex=1000;
}

function great_britan(){
    a=false;
    document.getElementById("britan").style.display = "block";
    document.getElementById("aboutUzb").style.background = "white";
    document.getElementById("aboutUzb").style.color = "black";

    // alert("salom1");
}
function america(){
    a=false;
    document.getElementById("america").style.display = "block";
    document.getElementById("aboutUzb").style.background = "white";
    document.getElementById("aboutUzb").style.color = "black";
    // alert("salom2");
}
function france(){
    a=false;
    document.getElementById("france").style.display = "block";
    document.getElementById("aboutUzb").style.background = "white";
    document.getElementById("aboutUzb").style.color = "black";
    // alert("salom3");
    // document.getElementById("france").style.zIndex=1000;
}
document.getElementById("aboutUzb").onmouseenter = function() {
    document.getElementById("uzbekistan").style.zIndex=1000;
    document.getElementById("uzbekistan").style.display = "block"
    document.getElementById("aboutUzb").style.background = "cornflowerblue";
    document.getElementById("aboutUzb").style.color = "white";
}
document.getElementById("aboutRus").onmouseenter = function() {
    document.getElementById("russia").style.zIndex=1000;
    document.getElementById("russia").style.display = "block"
}
document.getElementById("aboutRus").onmouseleave = function() {
    if(a){
        document.getElementById("russia").style.display = "none"
    }
}
document.getElementById("aboutUK").onmouseenter = function() {
    document.getElementById("britan").style.display= "blocked"
    document.getElementById("britan").style.zIndex=1000;
}
document.getElementById("aboutUK").onmouseleave = function() {
    if(a){
        document.getElementById("britan").style.display= "none"
    }
}
document.getElementById("aboutUS").onmouseenter = function() {
    document.getElementById("america").style.display= "blocked"
    document.getElementById("america").style.zIndex=1000;
}
document.getElementById("aboutUS").onmouseleave = function() {
    if(a){
        document.getElementById("america").style.display= "none"
    }
}
document.getElementById("aboutFr").onmouseenter = function() {
    document.getElementById("france").style.display= "blocked"
    document.getElementById("france").style.zIndex=1000;
}
document.getElementById("aboutFr").onmouseleave = function() {
    if(a){
        document.getElementById("france").style.display= "none"
    }
}

