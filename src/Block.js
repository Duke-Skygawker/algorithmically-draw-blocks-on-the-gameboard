export default class Block {
  constructor(x, y, blockWidth, blockHeight) {
    this.bottomLeft = [x, y];
    this.bottomRight = [x + blockWidth, y];
    this.topLeft = [x, y + blockHeight];
    this.topRight = [x + blockWidth, y + blockHeight];
    this.fragged = false;
  }
}
