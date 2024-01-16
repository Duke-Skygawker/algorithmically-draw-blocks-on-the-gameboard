import "./style.css";

const grid = document.getElementById("grid");
const blockDimensions = {
  x: 50,
  y: 20,
  posX: 50,
  posY: 20,
};
const gameboardDimensions = {
  x: 800,
  y: 600,
};
let rowGap = 0;
let rowCheck = 1;
let blockPosX = 0;
const columnGap = 20;
const adjustedWidth = gameboardDimensions.x - blockDimensions.x;
const blockQuantity = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

blockQuantity.forEach((item) => {
  // create block
  const block = document.createElement("div");
  block.classList.add("block");
  block.style.width = `${blockDimensions.x}px`;
  block.style.height = `${blockDimensions.y}px`;
  // check if the gameboard was filled horizontally
  if (blockPosX > adjustedWidth - columnGap) {
    blockPosX = rowCheck * columnGap;
    rowCheck += 1;
    // displace second row by this many pixels
    rowGap += 10;
  }
  // distance from the gameboard wall of the first block
  blockPosX += blockDimensions.x / 2;
  block.style.left = `${blockPosX}px`;
  // add the rest of the block width + horizontal gap between blocks
  blockPosX += blockDimensions.x / 2 + columnGap;
  // adjust block position depending if max width of the gameboard has been reached
  block.style.top = `${rowCheck * blockDimensions.posY + rowGap}px`;

  // add block to the gameboard
  if (item === 1) {
    grid.appendChild(block);
  }
});
