class Dispositivo {
    // Constructor
    constructor(marca, modelo, precio, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.color = color;
        this.almacenamiento = parseInt(prompt("Ingrese el almacenamiento en GB:"));
    }

    // Métodos públicos
    registrar() {
        document.write("-------------------------------------------------------------<br>");
        document.write("<div class='alert alert-primary' role='alert'><h3>DISPOSITIVO REGISTRADO<br></h3></div>");
        document.write("-------------------------------------------------------------<br>");
        document.write("Marca: " + this.marca + "<br>");
        document.write("Modelo: " + this.modelo + "<br>");
        document.write("Precio: " + this.precio + "<br>");
        document.write("Color: " + this.color + "<br>");
        document.write("Almacenamiento: " + this.almacenamiento + " GB<br>");
    }
}

class Smartphone extends Dispositivo {  // Subclase Smartphone
    // Constructor
    constructor(marca, modelo, precio, color, sistemaOperativo) {
        super(marca, modelo, precio, color);  // Llamada al constructor de la superclase
        this.sistemaOperativo = sistemaOperativo;
        this.camaraMegapixeles = parseInt(prompt("Ingrese la cámara en megapíxeles:"));
    }

    // Método privado
    detallesCamara() {
        document.write("Sistema Operativo: " + this.sistemaOperativo + "<br>");
        if (this.camaraMegapixeles >= 12) {
            document.write("--------------------<br>");
            document.write(`El dispositivo ${this.modelo} tiene una cámara de alta calidad<br>`);
        } else {
            document.write("--------------------<br>");
            document.write(`El dispositivo ${this.modelo} tiene una cámara estándar<br>`);
        }
    }
}

// Instanciando la subclase Smartphone
const objetoSmartphone = new Smartphone('Samsung', 'Galaxy A54', 600, 'AZUL', 'ANDROID');
objetoSmartphone.registrar();
objetoSmartphone.detallesCamara();
