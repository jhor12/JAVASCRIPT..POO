class Electrodomestico {
    // Constructor
    constructor(marca, color, capacidad) {
        this.marca = marca;
        this.color = color;
        this.capacidad = capacidad;
        this.consumoElectrico = parseInt(prompt("Digite el consumo electrico en kw:"));
    }

    // Métodos públicos
    registrar() {
        document.write("----------------------------------------------------------------<br>");
        document.write("<div class='alert alert-primary' role='alert'><h3>ELECTRODOMÉSTICO REGISTRADO<br></h3></div>");
        document.write("----------------------------------------------------------------<br>");
        document.write("Marca: " + this.marca + "<br>");
        document.write("Color: " + this.color + "<br>");
        document.write("Capacidad: " + this.capacidad + "<br>");
        document.write("Consumo eléctrico: " + this.consumoElectrico + " kw<br>");
    }
}

class Refrigerador extends Electrodomestico {  // Subclase Refrigerador
    // Constructor
    constructor(marca, color, capacidad, tipoRefrigerador) {
        super(marca, color, capacidad);  // Llamada al constructor de la superclase
        this.tipoRefrigerador = tipoRefrigerador;
        this.temperatura = parseInt(prompt("Ingrese la temperatura:"));
    }

    // Método privado
    ajustar() {
        document.write("Tipo de refrigerador: " + this.tipoRefrigerador + "<br>");

        if (this.temperatura > 10) {
            document.write("--------------------<br>");
            document.write(`El electrodoméstico de color ${this.color} con capacidad ${this.capacidad} tiene una temperatura estable<br>`);
        } else {
            document.write("--------------------<br>");
            document.write(`El electrodoméstico de color ${this.color} no enciende<br>`);
        }
    }
}

// Instanciando la subclase Refrigerador
const objetoRefrigerador = new Refrigerador('HACEB', 'GRIS', '2000LT', 'FROST');
objetoRefrigerador.registrar();
objetoRefrigerador.ajustar();
