const gridSelection = document.querySelectorAll(".radio");
let active = false;

gridSelection.forEach((gs) => {
  gs.addEventListener("input", function (e) {
    resetGrids();
    let grids = Number.parseInt(e.target.value) || 1;

    formGrids(grids);
  });
});

const sketchSize = 500;
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

let selectedColor = "#000000"; //set to black originally;

color.addEventListener("input", function (e) {
  selectedColor = e.target.value;
});
const grid = document.querySelectorAll(".grid");

let isDrawing = false;
container.addEventListener("mousedown", (e) => {
  isDrawing = true;
});

container.addEventListener("mousemove", (e) => {
  if (e.target.className !== "grid") isDrawing = false;
  if (isDrawing) {
    if (active) {
      selectedColor = randomizeRGB();
    }
    if (e.target.className === "grid") {
      e.target.style.background = selectedColor;
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

const random = document.querySelector(".random");

random.addEventListener("click", function (e) {
  random.classList.toggle("active");
  console.log(e.target.classList);
  if (e.target.classList.contains("active")) {
    active = true;
  } else {
    active = false;
  }
});

function randomizeRGB() {
  const maxExclusive = 256;
  let r = Math.floor(Math.random() * maxExclusive);
  let g = Math.floor(Math.random() * maxExclusive);
  let b = Math.floor(Math.random() * maxExclusive);

  return `rgb(${r}, ${g}, ${b})`;
}

function resetGrids() {
  const grid = document.querySelectorAll(".grid");
  grid.forEach((g) => {
    g.remove();
  });
}
