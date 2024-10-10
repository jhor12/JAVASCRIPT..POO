// Clase Personas con atributos privados
class Personas {
    // Método constructor
    constructor(nombres, apellidos, identidad, fechanacimiento, sexo) {
        this._nombres = nombres; // privado (convención en JS usando _)
        this._apellidos = apellidos; // privado
        this._identidad = identidad; // privado
        this.fechanacimiento = fechanacimiento; // público
        this.sexo = sexo; // público
    }

    // Método getter para nombres
    obtenerNombres() {
        return this._nombres;
    }

    // Método getter para apellidos
    obtenerApellidos() {
        return this._apellidos;
    }

    // Método getter para identidad
    obtenerIdentidad() {
        return this._identidad;
    }

    // Método setter para nombres
    establecerNombres(nuevosNombres) {
        this._nombres = nuevosNombres;
    }

    // Método setter para apellidos
    establecerApellidos(nuevosApellidos) {
        this._apellidos = nuevosApellidos;
    }

    // Método para mostrar detalles del objeto
    mostrarDetalles() {
        document.write(`Nombres: ${this._nombres}<br>`);
        document.write(`Apellidos: ${this._apellidos}<br>`);
        document.write(`N° Identidad: ${this._identidad}<br>`);
        document.write(`Fecha nacimiento: ${this.fechanacimiento}<br>`);
        document.write(`Sexo: ${this.sexo}<br>`);
    }
}

// Creación de un nuevo objeto persona
const persona = new Personas("Ana", "García", 1102800327, "25/05/1995", "F");

// Imprimir detalles iniciales
persona.mostrarDetalles();

document.write("<hr>");

// Modificar atributos encapsulados usando setters y obtenerlos con getters
persona.establecerNombres("María"); // setter
document.write(`Nombres: ${persona.obtenerNombres()} <br>`); // getter
persona.establecerApellidos("López"); // setter
document.write(`Apellidos: ${persona.obtenerApellidos()} <br>`); // getter
document.write(`N° Identidad: ${persona.obtenerIdentidad()} <br>`); // getter
document.write(`Fecha nacimiento: ${persona.fechanacimiento} <br>`); // público
document.write(`Sexo: ${persona.sexo} <br>`); // público
