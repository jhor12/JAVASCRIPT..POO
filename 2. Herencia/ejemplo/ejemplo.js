class Vehiculo {
    // Constructor
    constructor(marca, color, modelo) {
        this._marca = marca;
        this.color = color;
        this.modelo = modelo;
        this.numero_llantas = parseInt(prompt("No. de Llantas:"));
    }

    // Método público
    registrar() {
        document.write("-------------------------------------------------------------------------<br>");
        document.write("<div class='alert alert-primary' role='alert'><h3>CARRO REGISTRADO<br></h3></div>");
        document.write("-------------------------------------------------------------------------<br>");
        document.write("Marca: " + this._marca + "<br>");
        document.write("Color: " + this.color + "<br>");
        document.write("Modelo: " + this.modelo + "<br>");
        document.write("No. de Llantas: " + this.numero_llantas + "<br>");
    }
}

class Carro extends Vehiculo {
    // Constructor
    constructor(marca, color, modelo, placa) {
        super(marca, color, modelo); // Llamando al constructor de la superclase
        this._placa = placa; // Atributo privado
        this.gasolina = parseInt(prompt("No. de Galones de Gasolina: "));
    }

    // Método privado
    encender() {
        document.write("Placa: " + this._placa + "<br>"); // Imprimiendo la placa

        if (this.gasolina > 0) {
            document.write("------------------<br>");
            document.write(`El carro ${this._marca}, con placa ${this._placa} de color ${this.color} enciende !!<br>`);
        } else {
            document.write("------------------<br>");
            document.write(`El carro ${this._marca}, con placa ${this._placa} de color ${this.color} no enciende !!<br>`);
        }
    }
}

// Instanciando la subclase Carro
const objetoCarro = new Carro('SUZUKI', 'Rojo', '2022', 'PPC 54C');
objetoCarro.registrar(); // Registrando el carro
objetoCarro.encender(); // Encendiendo el carro

