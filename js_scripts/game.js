let sizeOfGrid = 16;

const container = document.querySelector(".container");

const createGrid = (dimensions) => {
  for (let i = 0; i < dimensions; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");

    for (let j = 0; j < dimensions; j++) {
      const widthAndHeight = 960 / sizeOfGrid;
      const gridBox = document.createElement("div");
      gridBox.classList.add("grid-box");
      gridBox.style.width = `${widthAndHeight}px`;
      gridBox.style.height = `${widthAndHeight}px`;
      //Below appendChild puts element INSIDE row div
      row.appendChild(gridBox);
    }
    container.appendChild(row);
  }
};

createGrid(sizeOfGrid);
