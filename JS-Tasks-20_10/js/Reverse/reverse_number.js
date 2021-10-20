let reverseField = document.querySelector(".reverseField");



function reversMachine(inputNum) {
    return (inputNum.split('').reverse().join(''));
}

function getInputValue() {
    let inputVal = document.getElementById("reverseID").value;
    //Lets Create a result box;
    let result = document.createElement("div");
    result.classList.add("result");
    result.innerText = `${reversMachine(inputVal)}`;
    reverseField.appendChild(result)
}

function clearField() {
    if (document.querySelectorAll(".result")) {
        document.querySelectorAll(".result").forEach(element => {
            element.remove();
        });
    }
}