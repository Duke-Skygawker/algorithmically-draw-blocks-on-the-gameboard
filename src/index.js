import "./style.css";
import Block from "./Block";

const grid = document.getElementById("grid");
// having a separate grid for re-rending blocks removes errors from moving the paddle
const blockGrid = document.getElementById("blockGrid");
// gameboard dimensions
const gameboardWidth = 800;
const gameboardHeight = 600;
// element dimensions
const blockWidth = 100;
const blockHeight = 20;
const ballSize = 10;
// element starting coords
const blockX = 20;
const blockY = 560;
const ballY = 40;
const ballX = gameboardWidth / 2 - ballSize / 2;
// variables used for gameboard drawing
const ballCurrentPos = [ballX, ballY];
const blockGap = 10;
const rowGap = 10;
const adjustedWidth = gameboardWidth - blockWidth;
let rowCheck = blockX * 2;
let currentX = blockX;
let currentY = blockY;
let gapCheck = 0;
const levels = [
  [
    [1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
  ],
];
// store populated blocks
const currentBlocks = [];

const populateBlocks = () => {
  levels[1].forEach((row) => {
    row.forEach((item) => {
      if (item === 1) {
        const blocky = new Block(
          currentX,
          currentY,
          blockWidth,
          blockHeight,
          ballCurrentPos
        );
        currentBlocks.push(blocky);
      }
      currentX += blockWidth + blockGap;
      if (rowCheck > adjustedWidth - blockGap) {
        currentY -= blockHeight + rowGap;
        rowCheck = blockX;
        currentX = blockX;
        gapCheck = 0;
      }
      rowCheck += blockWidth + blockGap;
    });
  });
};
populateBlocks();
const drawBlock = (blocky) => {
  const block = document.createElement("div");
  block.classList.add("block");
  block.style.left = blocky.bottomLeft[0] + "px";
  block.style.bottom = blocky.bottomLeft[1] + "px";
  block.style.width = `${blockWidth}px`;
  block.style.height = `${blockHeight}px`;
  if (blocky.fragged === false) {
    blockGrid.appendChild(block);
  }
};

const drawLevel = () => {
  // filter out the fragged blocks
  const newBlocks = currentBlocks.filter((block) => {
    if (block.fragged !== true) return block;
  });
  // remove all blocks from the grid
  blockGrid.replaceChildren();
  // re-render filtered blocks
  newBlocks.forEach((block) => {
    drawBlock(block);
  });
};
drawLevel();
