let container = document.getElementById('container')

window.onload = createGrid(16);

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
    let rgb1 = randomColorNum();
    let rgb2 = randomColorNum();
    let rgb3 = randomColorNum();
    
    e.target.style.background = rgb(rgb1, rgb2, rgb3);
    let opacity = e.target.style.opacity;
    // If Opacity is true - increase target opacity by opacity + 0.1.
    if(opacity) {
        e.target.style.opacity = Number(opacity) + 0.1;
    } else {
        e.target.style.opacity = 0.1
    };
        
})


function randomColorNum() {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(255);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

function rgb(r, g, b){
    return "rgb("+r+","+g+","+b+")";
}