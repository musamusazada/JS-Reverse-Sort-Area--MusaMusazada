let areaField = document.querySelector(".areaField");
let widthVal = document.getElementById("widthID");
let heightVal = document.getElementById("heightID");
let boxContainer = document.querySelector(".box-container");

//Color Array to make random colored rectangles.
let colors = ["#e76f51", "#a7c957", "#2a9d8f", "#e63946", "#4f772d", "#ee9b00", "#ffd6a5", "#e29578", "#2b2d42", "#f5cac3"];

function boxCreator() {
    let width = widthVal.value;
    let height = heightVal.value;

    let box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = `${colors[parseInt(Math.random()*colors.length)]}`;
    box.innerText = `${width} x ${height} \n Area: ${width*height}`;
    box.style.color = "#fff";
    box.style.width = width + "px";
    box.style.height = height + "px";
    boxContainer.appendChild(box);
}

function clearBoxes() {
    if (document.querySelectorAll(".box")) {
        document.querySelectorAll(".box").forEach(element => {
            element.remove();
        });
    }
}