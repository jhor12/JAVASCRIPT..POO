class Reloj {
    // Constructor
    constructor(marca, modelo, precio, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.color = color;
    }

    // Método para mostrar la información básica del reloj
    mostrarInformacion() {
        document.write("------------------------------------------------------------------<br>");
        document.write("<div class='alert alert-primary' role='alert'><h3>INFORMACION DEL RELOJ<br></h3></div>");
        document.write("--------------------<br>");
        document.write("Marca: " + this.marca + "<br>");
        document.write("Modelo: " + this.modelo + "<br>");
        document.write("Precio: " + this.precio + "<br>");
        document.write("Color: " + this.color + "<br>");
    }
}

class RelojInteligente extends Reloj {
    // Constructor
    constructor(marca, modelo, precio, color, sistemaOperativo, duracionBateria) {
        super(marca, modelo, precio, color);
        this.sistemaOperativo = sistemaOperativo;
        this.duracionBateria = duracionBateria;
    }

    // Método para mostrar la información específica del reloj inteligente
    mostrarInformacionRelojInteligente() {
        this.mostrarInformacion();
        document.write("Sistema Operativo: " + this.sistemaOperativo + "<br>");
        document.write("Duración de la Batería: " + this.duracionBateria + " horas<br>");
    }
}

// Instanciando la clase RelojInteligente
const relojInteligente = new RelojInteligente('Apple', 'Watch Series 8', 399, 'Negro', 'watchOS', 18);
relojInteligente.mostrarInformacionRelojInteligente();
