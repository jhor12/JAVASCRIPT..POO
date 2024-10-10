// Clase base abstracta FormaGeometrica
class FormaGeometrica {
    calcular_area() {
        throw new Error("Este método debe ser implementado por la subclase");
    }
}

// Clase Cuadrado que hereda de FormaGeometrica
class Cuadrado extends FormaGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    calcular_area() {
        return this.lado ** 2;
    }
}

// Clase Circulo que hereda de FormaGeometrica
class Circulo extends FormaGeometrica {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    calcular_area() {
        return Math.PI * (this.radio ** 2);
    }
}

// Uso de las clases y mostrar los resultados en el HTML
const cuadrado = new Cuadrado(5);
const circulo = new Circulo(3);

// Seleccionamos el div donde se mostrará el resultado
const output = document.getElementById('output');
output.innerHTML = `
    <p>Área del cuadrado: ${cuadrado.calcular_area()}</p>
    <p>Área del círculo: ${circulo.calcular_area()}</p>
`;
