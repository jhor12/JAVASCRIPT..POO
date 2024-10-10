// Iniciamos la clase
class Libros {

    // Constructor
    constructor(titulo, autor, isbn, editorial) {
        this._titulo = titulo;
        this._autor = autor;
        this._isbn = isbn;
        this.editorial = editorial; // público
    }

    // Métodos getter
    obtener_titulo() {
        return this._titulo;
    }

    obtener_autor() {
        return this._autor;
    }

    obtener_isbn() {
        return this._isbn;
    }

    // Métodos setter
    nuevo_titulo(nuevo_titulo) {
        this._titulo = nuevo_titulo;
    }

    nuevo_autor(nuevo_autor) {
        this._autor = nuevo_autor;
    }

    nuevo_isbn(new_isbn) {
        this._isbn = new_isbn;
    }

    // Método para mostrar detalles
    mostrar() {
        document.write(`Título: ${this._titulo}<br>`);
        document.write(`Autor: ${this._autor}<br>`);
        document.write(`ISBN: ${this._isbn}<br>`);
        document.write(`Editorial: ${this.editorial}<br>`);
    }
}

// Creación de un nuevo objeto libro
const libro = new Libros("El señor de los anillos", "J.R.R. Tolkien", 978060300, "HarperCollins");

// Imprimir detalles iniciales
libro.mostrar();

document.write("<hr>");

// Modificar atributos encapsulados usando setters y obtenerlos con getters
libro.nuevo_titulo("Harry Potter y la piedra filosofal"); // setter
document.write(`Título: ${libro.obtener_titulo()} <br>`); // getter
libro.nuevo_autor("J.K. Rowling"); // setter
document.write(`Autor: ${libro.obtener_autor()} <br>`); // getter
libro.nuevo_isbn(978074753); // setter
document.write(`ISBN: ${libro.obtener_isbn()} <br>`); // getter
document.write(`Editorial: ${libro.editorial} <br>`); // público
