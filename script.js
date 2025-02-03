const container = document.querySelector(".container");
const resizeButton = document.querySelector(".resize");

function colorRandomization() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function gridCreate (size) {
    container.textContent = '';
    const boxSize = 720 / size;

    for (let i = 0; i < size * size; i++) {
        const gridBox = document.createElement("div");
        gridBox.classList.add("gridBox");
        gridBox.style.width = `${boxSize}px`;
        gridBox.style.height = `${boxSize}px`;
        gridBox.style.opacity = 0.1;
        container.appendChild(gridBox);
    }

    const boxes = document.querySelectorAll(".gridBox");

    boxes.forEach((gridBox) => {
      gridBox.addEventListener("mouseover", () => {
        const randomColor = colorRandomization();
        gridBox.style.backgroundColor = randomColor;
  
        let currentOpacity = parseFloat(gridBox.style.opacity);
        if (currentOpacity < 1) {
          gridBox.style.opacity = (currentOpacity + 0.1).toString();
        }
      });
    });
  }

resizeButton.addEventListener ("mouseover", () => {
    resizeButton.style.backgroundColor = colorRandomization();
})

gridCreate(16);

function newGrid() {
  let gridSize = prompt("How many squares per side? (Max 100, Min 1)");
  if (gridSize <= 100 && gridSize > 0){
    gridCreate(gridSize);
  }
  else {
    alert("Value must be between 1 and 100.");
  }
}

resizeButton.addEventListener("click", () => {
    newGrid();
  });