class Instrumento {
    // Constructor
    constructor(tipo, marca, materialFabricacion, precio) {
        this.tipo = tipo;
        this.marca = marca;
        this.materialFabricacion = materialFabricacion;
        this.precio = precio;
        this.tamano = parseFloat(prompt("Ingrese el tamaño del instrumento en cm:"));
    }

    // Métodos públicos
    registrar() {
        document.write("-----------------------------------------------------------<br>");
        document.write("<div class='alert alert-primary' role='alert'><h3>INSTRUMENTO REGISTRADO<br></h3></div>");
        document.write("-----------------------------------------------------------<br>");
        document.write("Tipo: " + this.tipo + "<br>");
        document.write("Marca: " + this.marca + "<br>");
        document.write("Material de fabricación: " + this.materialFabricacion + "<br>");
        document.write("Precio: " + this.precio + "<br>");
        document.write("Tamaño: " + this.tamano + " cm<br>");
    }
}

class Guitarra extends Instrumento {  // Subclase Guitarra
    // Constructor
    constructor(tipo, marca, materialFabricacion, precio, numeroCuerdas) {
        super(tipo, marca, materialFabricacion, precio);  
        this.numeroCuerdas = numeroCuerdas;
    }

    // Método privado
    detallesCuerdas() {
        document.write("--------------------<br>");
        document.write(`La guitarra ${this.marca} tiene ${this.numeroCuerdas} cuerdas<br>`);
    }
}

// Instanciando la subclase Guitarra
const objetoGuitarra = new Guitarra('Eléctrica', 'CORT', 'Madera AAA', 1600000, "58CM");
objetoGuitarra.registrar();
objetoGuitarra.detallesCuerdas();
