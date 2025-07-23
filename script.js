class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  get area() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }

  get perimeter() {
    return 4 * this._width;
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

 