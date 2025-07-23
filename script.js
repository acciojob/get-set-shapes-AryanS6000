//complete this code
class Rectangle {
	constructor(width,height){
		this.width = _width;
		this.height = _height;
	}
	 get width(){
		 return this._width;
	 }

	get height(){
		 return this._height;
	 }
	get area(){
		return this._width * this._height;
	}
}

	class Square extends Rectangle {
		constructor(side){
		super(side,side)
		}
		get perimeter(){
			return 4* this._width;
		}
	}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
