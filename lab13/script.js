class Polygon {
  constructor(dim1, dim2) {
    if (this.constructor === Polygon) {
      throw new Error("Cannot instantiate an abstract class");
    }
    this.dim1 = dim1;
    this.dim2 = dim2;
  }

  area() {
    throw new Error("You have to implement the method area!");
  }

  toString() {
    return `The area of the polygon is ${this.area()} and the dimensions are ${
      this.dim1
    } and ${this.dim2}`;
  }
}

class Rectangle extends Polygon {
  constructor(dim1, dim2) {
    super(dim1, dim2);
  }

  area() {
    return this.dim1 * this.dim2;
  }
}

class Triangle extends Polygon {
  constructor(dim1, dim2) {
    super(dim1, dim2);
  }

  area() {
    return 0.5 * this.dim1 * this.dim2;
  }
}
class Circle extends Polygon {
  constructor(dim1) {
    super(dim1, null);
  }

  area() {
    return Math.PI * this.dim1 * this.dim1;
  }
}

class Square extends Polygon {
  constructor(dim1) {
    super(dim1, null);
  }

  area() {
    return this.dim1 * this.dim1;
  }
}

function main() {
  let rectangle = new Rectangle(10, 20);
  console.log(rectangle.toString());

  let triangle = new Triangle(10, 20);
  console.log(triangle.toString());

  let circle = new Circle(10);
  console.log(circle.toString());

  let square = new Square(10);
  console.log(square.toString());
}


main();