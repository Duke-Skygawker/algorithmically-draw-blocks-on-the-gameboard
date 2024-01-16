import "./style.css";
import Block from "./Block";

const grid = document.getElementById("grid");
const blockWidth = 100;
const blockHeight = 20;
const blockX = 20;
const blockY = 560;
const blockGap = 10;
const rowGap = 10;
const gameboardWidth = 800;
const adjustedWidth = gameboardWidth - blockWidth;
const gameboardHeight = 600;
let rowCheck = blockX * 2;
let currentX = blockX;
let currentY = blockY;
let gapCheck = 0;

// all blocks
const blocks = [
  [1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
];
const drawLevel = () => {
  blocks.forEach((row) => {
    row.forEach((item) => {
      if (item === 1) {
        const blocky = new Block(currentX, currentY, blockWidth, blockHeight);
        const block = document.createElement("div");
        block.classList.add("block");
        block.style.left = blocky.bottomLeft[0] + "px";
        block.style.bottom = blocky.bottomLeft[1] + "px";
        block.style.width = `${blockWidth}px`;
        block.style.height = `${blockHeight}px`;
        grid.appendChild(block);
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

drawLevel();

const handleInput = () => {
  const paddle = document.getElementById("block1");
  let dick = 100;
  document.addEventListener("keydown", (e) => {
    switch (e.code) {
      case "KeyA":
      case "ArrowLeft":
        dick -= 10;
        paddle.style.left = `${dick}px`;

        break;

      case "KeyD":
      case "ArrowRight":
        dick += 10;
        paddle.style.left = `${dick}px`;
        break;
    }
  });
};
