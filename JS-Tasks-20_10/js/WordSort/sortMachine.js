let wordSortField = document.querySelector(".wordSortField");
let word = document.getElementById("wordID");


function sortNow() {
    let sortedWord = word.value.split('').sort().join('');

    let result = document.createElement("div");
    result.classList.add("sortedWord");
    result.innerText = sortedWord;
    wordSortField.appendChild(result);

}

function clearWords() {
    if (document.querySelectorAll(".sortedWord")) {
        document.querySelectorAll(".sortedWord").forEach(element => {
            element.remove();
        });
    }
}