let grids = 9;
const sketchSize = 960;
let gridSize = sketchSize / grids;
const container = document.querySelector(".container");
for (let i = 0; i < grids * grids; i++) {
  const grid = document.createElement("div");
  grid.className = "grid";
  //   grid.style.flex = "1 1 auto";
  grid.style.width = `${gridSize}px`;
  container.appendChild(grid);
}

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
      e.target.style.background = "lightpink";
      console.log(e.target);
    }
  }
});

container.addEventListener("mouseup", (e) => {
  isDrawing = false;
});
