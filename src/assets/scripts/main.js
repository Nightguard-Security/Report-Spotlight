const background = document.getElementById('background');
const cellSize = 50;

createGrid(getGridSize());

window.addEventListener('resize', (event) => {
  createGrid(getGridSize());
});

function createGrid(gridSize) {
  background.innerHTML = '';
  for (let y = 0; y < gridSize.y; y++) {
    const gridRow = document.createElement('div');
    for (let x = 0; x < gridSize.x; x++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.style.width = `${cellSize}px`;
      cell.style.height = `${cellSize}px`;
      gridRow.appendChild(cell);
    }
    background.appendChild(gridRow);
  }
}

function getGridSize() {
  const cellColumnCount = Math.ceil(document.body.clientWidth / cellSize);
  const cellRowCount = Math.ceil(document.body.clientHeight / cellSize);
  return { x: cellColumnCount, y: cellRowCount};
}