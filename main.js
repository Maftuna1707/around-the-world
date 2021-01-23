var block = document.getElementsByClassName('box')
var box = document.getElementsByClassName('block')
console.log(block, box)
let a = box[0]
a.classList.add("opacity")
block[0].onmouseenter = function() {
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
    box[4].classList.add("opacity")
    box[0].classList.remove("opacity")
    box[3].classList.remove("opacity")
    box[1].classList.remove("opacity")
    box[2].classList.remove("opacity")
    a = box[4]
}