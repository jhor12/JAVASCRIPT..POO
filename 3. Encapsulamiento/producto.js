// Creación de la clase
class Productos {
    // Constructor
    constructor(nombre, precio, cantidad, categoria) {
        this._nombre = nombre;
        this._precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }

    // Método getter para nombre
    obtenerNombre() {
        return this._nombre;
    }

    // Método getter para precio
    obtenerPrecio() {
        return this._precio;
    }

    // Método setter para nombre
    establecerNombre(nuevo_nombre) {
        this._nombre = nuevo_nombre;
    }

    // Método setter para precio
    establecerPrecio(nuevo_precio) {
        this._precio = nuevo_precio;
    }

    // Mostrar detalles del objeto
    mostrardetalles() {
        document.write(`Nombre: ${this._nombre}<br>`);
        document.write(`Precio: ${this._precio}<br>`);
        document.write(`Cantidad: ${this.cantidad}<br>`);
        document.write(`Categoría: ${this.categoria}<br>`);
    }
}

// Creación de un nuevo objeto producto (televisor)
const producto = new Productos("Televisor 4K", 1500000, 10, "Electrónica");

// Imprimir detalles iniciales
producto.mostrardetalles();

document.write("<hr>");

// Modificar atributos encapsulados usando getter y setter
producto.establecerNombre("Televisor OLED");
producto.establecerPrecio(3000000);
producto.cantidad = 8;
producto.categoria = "Electrodomésticos";

// Mostrar detalles después de los cambios
document.write(`Nombre: ${producto.obtenerNombre()} <br>`);
document.write(`Precio: ${producto.obtenerPrecio()} <br>`);
document.write(`Cantidad: ${producto.cantidad}<br>`);
document.write(`Categoría: ${producto.categoria}`);
