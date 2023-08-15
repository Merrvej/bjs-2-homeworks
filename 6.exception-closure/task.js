function parseCount(value) {
    let parsedValue = Number.parseFloat(value);
    if (isNaN(parsedValue)) {
      throw new Error("Невалидное значение");
    }
    return parsedValue;
  }
  
  function validateCount(value) {
    try {
      return parseCount(value);
    } catch (error) {
      return error;
    }
  }

class Triangle {
    constructor(a, b, c) {
    
        if(a + b < c || b + c < a || c + a < b) {
            throw new Error('Треугольник с такими сторонами не существует');
        }

        this.a = a;
        this.b = b;
        this.c = c;
    }


    get perimeter() {
        let perimeter = this.a + this.b + this.c;
        return perimeter;
    }

    get area() {
        let p = this.perimeter / 2;
        let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return +area.toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (error) {
      return {
        area: "Ошибка! Треугольник не существует",
        perimeter: "Ошибка! Треугольник не существует"
      };
    }
  }