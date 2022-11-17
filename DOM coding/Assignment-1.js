let color = ["blue", "yellow", "red", "green", "brown", "orange", "aqua", "white"];

let button = document.querySelector("button");
button.addEventListener("click", function(){
    var randomColor = color[Math.floor(Math.random() * color.length)]
    let container = document.getElementById("container");
    container.style.background = randomColor;
})
