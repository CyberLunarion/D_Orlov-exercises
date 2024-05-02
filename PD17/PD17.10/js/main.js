function sortAlphabetic() {
    let list = document.getElementById("list1");
    let elements = Array.from(list.children);
    const sorted = elements.sort((a, b) => a.textContent.localeCompare(b.textContent));
    sorted.forEach(element => list.appendChild(element));
}

function sortReversed() {
    let list = document.getElementById("list1");
    let elements = Array.from(list.children);
    const sorted = elements.sort((a, b) => b.textContent.localeCompare(a.textContent));
    sorted.forEach(element => list.appendChild(element));
}
