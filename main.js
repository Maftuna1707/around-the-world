let uzbekistan = document.getElementById("uzbekistan")
let russia = document.getElementById("russia")
let v_france = document.getElementById("france")
let usa = document.getElementById("america")
let uk = document.getElementById("britan")
function uzb() {
    document.getElementById("right").innerHTML= uzbekistan
}
function rus() {
    document.getElementById("right").innerHTML=russia
}
function america() {
    document.getElementById("right").innerHTML=usa
}
function great_britan() {
    document.getElementById("right").innerHTML=uk
}
function france() {
    document.getElementById("right").innerHTML=v_france
}
document.getElementById("aboutUzb").onmouseenter = function() {
    document.getElementById("right").innerHTML=uzbekistan
}
document.getElementById("aboutRus").onmouseenter = function() {
    document.getElementById("right").innerHTML=russia
}
document.getElementById("aboutUK").onmouseenter = function() {
    document.getElementById("right").innerHTML=uk
}
document.getElementById("aboutUSA").onmouseenter = function() {
    document.getElementById("right").innerHTML=usa
}
document.getElementById("aboutFr").onmouseenter = function() {
    document.getElementById("right").innerHTML=v_france
}

