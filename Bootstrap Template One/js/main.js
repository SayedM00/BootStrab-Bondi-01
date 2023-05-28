// Page Bar
window.onscroll = () => {
    document.querySelector(".bar").style.width = `${(document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100}%`
}

// Show And Hide Search Bar
document.querySelector("#svg-object").addEventListener("click",  () =>{

    console.log("ok")
    document.querySelector("[type='search']").classList.toggle("show")
})

// Hide And Show Depends on Fillter and LocalStorage
let categores = document.querySelectorAll(".our-work ul li");
let boxes = document.querySelectorAll(".our-work .row > div")
getDataAndChange(categores)

if (localStorage.getItem("type")) {
    removeActiveClass(categores)
    for(let i=0; i<categores.length; i++) {
        if(categores[i].getAttribute("data-filter") == localStorage.getItem("type")) {
            addActiveClass(categores[i])
            addDisplay(boxes, localStorage.getItem("type"))
        }
    }
}

function getDataAndChange(elements) {
    elements.forEach(ele => {
        ele.addEventListener("click", function(e) { 
            localStorage.setItem("type", e.target.getAttribute("data-filter"))
            removeActiveClass(elements)
            addActiveClass(e.target)
            addDisplay(boxes, e.target.getAttribute("data-filter"))
        })
    });
}

function removeActiveClass(elements) {
    elements.forEach(ele => {
        ele.classList.remove("active")
    }) 
}

function addActiveClass(element) {
    element.classList.add("active")
}

function addDisplay(elements, data) {
    for(let i=0; i<elements.length; i++) {
        if(elements[i].classList.contains(data)) {
            elements[i].style.display = "block"
        } else {
            elements[i].style.display = "none"
        }
    }
}