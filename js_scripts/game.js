let sizeOfGrid = 16;

const container = document.querySelector(".container");
const resetButton = document.querySelector("button");

//Create Grid
const createGrid = (dimensions) => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  for (let i = 0; i < dimensions; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");

    for (let j = 0; j < dimensions; j++) {
      const widthAndHeight = 960 / dimensions;
      const gridBox = document.createElement("div");
      gridBox.classList.add("grid-box");
      gridBox.style.width = `${widthAndHeight}px`;
      gridBox.style.height = `${widthAndHeight}px`;
      //Mouse hover event
      gridBox.addEventListener("mouseenter", () => {
        gridBox.style.backgroundColor = "black";
      });

      //Below appendChild puts element INSIDE row div
      row.appendChild(gridBox);
    }
    wrapper.appendChild(row);
  }
  container.appendChild(wrapper);
};

createGrid(sizeOfGrid);

//Create Reset event
resetButton.addEventListener("click", () => {
  let userSize = Number(prompt("Please enter a number for the grid size"));

  while (userSize > 100) {
    userSize = Number(
      prompt("Please enter a number for the grid size that is less than 100")
    );
  }
  const wrapper = document.querySelector(".wrapper");
  if (wrapper) {
    wrapper.remove();
    createGrid(userSize);
  }
});

//TODO make color random RGB and darken colors by 10% every pass.
//Should be completely dark after 10 passes
