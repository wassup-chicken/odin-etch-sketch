const gridSelection = document.querySelectorAll(".radio");

gridSelection.forEach((gs) => {
  gs.addEventListener("input", function (e) {
    resetGrids();
    let grids = Number.parseInt(e.target.value) || 1;

    formGrids(grids);
  });
});

const sketchSize = 960;
const container = document.querySelector(".container");

function formGrids(numberOfGrids) {
  let gridSize = sketchSize / numberOfGrids;
  for (let i = 0; i < numberOfGrids * numberOfGrids; i++) {
    const grid = document.createElement("div");
    grid.className = "grid";
    grid.style.flex = "1 1 auto";
    grid.style.width = `${gridSize}px`;
    container.appendChild(grid);
  }
}

const color = document.querySelector("#favcolor");
let selectedColor = "black";
color.addEventListener("input", function (e) {
  selectedColor = e.target.value;
});
const grid = document.querySelectorAll(".grid");

let isDrawing = false;
container.addEventListener("mousedown", (e) => {
  console.log("yo");
  isDrawing = true;
});

container.addEventListener("mousemove", (e) => {
  if (e.target.className !== "grid") isDrawing = false;
  if (isDrawing) {
    if (e.target.className === "grid") {
      e.target.style.background = selectedColor;
      console.log(e.target);
    }
  }
});

container.addEventListener("mouseup", (e) => {
  isDrawing = false;
});

const reset = document.querySelector(".reset");

reset.addEventListener("click", function (e) {
  const gridSelection = document.querySelectorAll(".radio");
  gridSelection.forEach((gs) => {
    gs.checked = false;
  });
  resetGrids();
});

function resetGrids() {
  const grid = document.querySelectorAll(".grid");
  grid.forEach((g) => {
    g.remove();
  });
}
