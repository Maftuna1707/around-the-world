let block = document.getElementsByClassName('box')
let box = document.getElementsByClassName('block')
console.log(block, box)
let a = box[0]
a.classList.add("opacity")
block[0].onmouseenter = function() {
    document.getElementById("first").style.background="#48b1d1c9"
    document.getElementById("first").style.color="white"
    box[0].classList.add("opacity")
    box[3].classList.remove("opacity")
    box[2].classList.remove("opacity")
    box[1].classList.remove("opacity")
    box[4].classList.remove("opacity")
}
block[0].onmouseleave = function() {
    box[4].classList.remove("opacity")
    box[3].classList.remove("opacity")
    box[2].classList.remove("opacity")
    box[1].classList.remove("opacity")
    box[0].classList.remove("opacity")
    a.classList.add("opacity")
}
block[0].onclick = function() {
    box[0].classList.add("opacity")
    box[3].classList.remove("opacity")
    box[2].classList.remove("opacity")
    box[1].classList.remove("opacity")
    box[4].classList.remove("opacity")
    a = box[0]
}
block[1].onmouseenter = function() {

    box[1].classList.add("opacity")
    box[4].classList.remove("opacity")
    box[2].classList.remove("opacity")
    box[3].classList.remove("opacity")
    box[0].classList.remove("opacity")
}
block[1].onmouseleave = function() {
    box[4].classList.remove("opacity")
    box[3].classList.remove("opacity")
    box[2].classList.remove("opacity")
    box[1].classList.remove("opacity")
    box[0].classList.remove("opacity")
    a.classList.add("opacity")
}
block[1].onclick = function() {
    document.getElementById("first").style.background="white"
    document.getElementById("first").style.color="black"
    box[1].classList.add("opacity")
    box[4].classList.remove("opacity")
    box[2].classList.remove("opacity")
    box[3].classList.remove("opacity")
    box[0].classList.remove("opacity")
    a = box[1]
}
block[2].onmouseenter = function() {
    box[2].classList.add("opacity")
    box[4].classList.remove("opacity")
    box[1].classList.remove("opacity")
    box[0].classList.remove("opacity")
    box[3].classList.remove("opacity")
}
block[2].onmouseleave = function() {
    box[4].classList.remove("opacity")
    box[3].classList.remove("opacity")
    box[2].classList.remove("opacity")
    box[1].classList.remove("opacity")
    box[0].classList.remove("opacity")
    a.classList.add("opacity")
}
block[2].onclick = function() {
    document.getElementById("first").style.background="white"
    document.getElementById("first").style.color="black"
    box[2].classList.add("opacity")
    box[4].classList.remove("opacity")
    box[3].classList.remove("opacity")
    box[1].classList.remove("opacity")
    box[0].classList.remove("opacity")
    a = box[2]
}
block[3].onmouseenter = function() {
    box[3].classList.add("opacity")
    box[4].classList.remove("opacity")
    box[2].classList.remove("opacity")
    box[0].classList.remove("opacity")
    box[1].classList.remove("opacity")
}
block[3].onmouseleave = function() {
    box[4].classList.remove("opacity")
    box[3].classList.remove("opacity")
    box[2].classList.remove("opacity")
    box[1].classList.remove("opacity")
    box[0].classList.remove("opacity")
    a.classList.add("opacity")
}
block[3].onclick = function() {
    document.getElementById("first").style.background="white"
    document.getElementById("first").style.color="black"
    box[3].classList.add("opacity")
    box[4].classList.remove("opacity")
    box[1].classList.remove("opacity")
    box[2].classList.remove("opacity")
    box[0].classList.remove("opacity")
    a = box[3]
}
block[4].onmouseenter = function() {
    box[4].classList.add("opacity")
    box[0].classList.remove("opacity")
    box[1].classList.remove("opacity")
    box[2].classList.remove("opacity")
    box[3].classList.remove("opacity")
}
block[4].onmouseleave = function() {
    box[4].classList.remove("opacity")
    box[3].classList.remove("opacity")
    box[2].classList.remove("opacity")
    box[1].classList.remove("opacity")
    box[0].classList.remove("opacity")
    a.classList.add("opacity")
}
block[4].onclick = function() {
    document.getElementById("first").style.background="white"
    document.getElementById("first").style.color="black"
    box[4].classList.add("opacity")
    box[0].classList.remove("opacity")
    box[3].classList.remove("opacity")
    box[1].classList.remove("opacity")
    box[2].classList.remove("opacity")
    a = box[4]
}