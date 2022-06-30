// Создать класс RangeValidator, со следующими свойствами:
// ■ from (number);
// ■ to (number);
// Реализовать getter'ы и setter'ы для обоих свойств
// from должен быть меньше to
// Реализовать getter range, который будет возвращать массив с двумя числами диапазона
// Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон. Метод возвращает значение, если значение валидно. И кинет ошибку, если нет.

// Создать класс Figure3D
// Создать классы-потомки для Шара, Цилиндра и Куба.
// У всех классов должен быть метод для рассчета объема.

//1

class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  get from() {
    return this._from;
  }

  set from(from) {
    if (typeof from !== "number") {
      throw new TypeError("From must be number");
    }
    if (from > this._to) {
      throw new TypeError("From must be less to");
    }
    this._from = from;
  }
  get to() {
    return this._to;
  }

  set to(to) {
    if (typeof to !== "number") {
      throw new TypeError("To must be number");
    }
    if (to < this._from) {
      throw new TypeError("To must be smaller from");
    }
    this._to = to;
  }
  getRange() {
    return [this.from, this.to];
  }

  getValidate(number) {
    if (typeof number !== "number") {
      throw new TypeError("To must be number");
    }
    if (number >= this.from && number <= this.to) {
      return number;
    }  
      throw new RangeError(" number must be rangeValidate");
   
  }
}
const range = new RangeValidator(50, 300);

/*-------------------------------------------------------*/

//2

class Figura3D {
  constructor(name) {
    this._name = name;
  }
  getArea() {
    return null;
  }
  get name() {
    return this._name;
  }
  static isFigura(obj) {
    return obj instanceof Figura3D;
  }
}

class Ball extends Figura3D {
  constructor(radius) {
    super("Ball");

    this.radius = radius;
  }
  getVolume() {
    return (4 / 3) * (Math.PI * Math.pow(this.radius, 3));
  }
}

function calcAreaFigure(figure) {
  if (Figura3D.isFigura(figure) === false) {
    throw new TypeError("must be figure");
  }
  return figure.getVolume();
}

const ball = new Ball(5);
console.log("Ball", calcAreaFigure(ball));

class Cylinder extends Figura3D {
  constructor(hight, radius) {
    super("Cylinder");
    this.hight = hight;
    this.radius = radius;
  }
  getVolume() {
    return Math.PI * Math.pow(this.radius, 2) * this.hight;
  }
}

function calcAreaFigure(figure) {
  if (Figura3D.isFigura(figure) === false) {
    throw new TypeError("must be figure");
  }
  return figure.getVolume();
}

const cylindr = new Cylinder(10, 20);
console.log("Cylinder", calcAreaFigure(cylindr));

class Cube extends Figura3D {
  constructor(side) {
    super("Cube");
    this.side = side;
  }
  getVolume() {
    return Math.pow(this.side, 3);
  }
}

function calcAreaFigure(figure) {
  if (Figura3D.isFigura(figure) === false) {
    throw new TypeError("must be figure");
  }
  return figure.getVolume();
}

const cube = new Cube(3);
console.log("Cube", calcAreaFigure(cube));
