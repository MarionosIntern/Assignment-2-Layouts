
function createButton(){
    const parentList = document.querySelectorAll(".grid-item");
    for(let index = 0; index < parentList.length; index++){
        const parent = parentList[index];
        const button = document.createElement("button");
        button.textContent = "Save Event";
        parent.appendChild(button);
    }
}

window.addEventListener('load', createButton);


