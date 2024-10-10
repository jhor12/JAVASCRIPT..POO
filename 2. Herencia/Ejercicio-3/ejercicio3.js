class Electronico {
    // Constructor
    constructor(marca, modelo, precio, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.color = color;
    }

    // Método para mostrar la información básica
    mostrarInformacion() {
        document.write("----------------------------------------------------------<br>");
        document.write("<div class='alert alert-primary' role='alert'><h3>INFORMACIÓN DEL ELECTRÓNICO<br></h3></div>");
        document.write("----------------------------------------------------------<br>");
        document.write("Marca: " + this.marca + "<br>");
        document.write("Modelo: " + this.modelo + "<br>");
        document.write("Precio: " + this.precio + "<br>");
        document.write("Color: " + this.color + "<br>");
    }
}

class Laptop extends Electronico {
    // Constructor
    constructor(marca, modelo, precio, color, tamanioPantalla, capacidadBateria) {
        super(marca, modelo, precio, color);
        this.tamanioPantalla = tamanioPantalla;
        this.capacidadBateria = capacidadBateria;
    }

    // Método para mostrar la información específica de la laptop
    mostrarInformacionLaptop() {
        this.mostrarInformacion();  
        document.write("Tamaño de Pantalla: " + this.tamanioPantalla + " pulgadas<br>");
        document.write("Capacidad de Batería: " + this.capacidadBateria + " mAh<br>");
    }
}

// Instanciando la clase Laptop
const laptop = new Laptop('Dell', 'XPS 13 PRO', 2600, 'NEGRO', 13.3, 5000);
laptop.mostrarInformacionLaptop();
