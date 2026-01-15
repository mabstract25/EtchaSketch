let container = document.getElementById('container')

window.onload = createGrid(50);

function createGrid(n){
    for(let row = 0; row<n; row++){
        for(let column = 0; column<n; column++){
            let div1 = document.createElement("div");
            div1.classList.add("grid");
            div1.style.background = "pink";
            div1.style.width = `${800/n}px`;
            div1.style.height = `${800/n}px`;
            container.appendChild(div1);
        }
    }
}

console.log(container);

function reDraw() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    let redrawprompt = prompt("How many squares per side?");
    if(redrawprompt <= 100) {
        createGrid(redrawprompt);
    } else {
        alert("Value must be a number less than 100");
    }
    
}

container.addEventListener("mouseover", (e) => {
    e.target.style.background = "orange";
    // console.log(e);
})