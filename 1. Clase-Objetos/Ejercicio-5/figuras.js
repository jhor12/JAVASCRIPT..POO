//Defino la clase
class Figuras{
    //Metodo constructor
    constructor(nombre, lados, vertices){
        this.nombre = nombre //Propiedades para la instancia
        this.lados = lados
        this.vertices = vertices
        
    }

    //Metodo para mostrar detalles del objeto
    mostrarDetalles(){
        document.write("<h3>Figuras</h3><br>")
        document.write("nombre: "+this.nombre+"<br>")
        document.write("lados: "+this.lados+"<br>")
        document.write("vertices: "+this.vertices+" <br>")
        document.write("<hr>")
        
    }

} 

//Creamos los objetos
let figura1 = new Figuras ("TRIANGULO", "3", "3")
let figura2 = new Figuras ("PENTAGONO","5", "5")
let figura3 = new Figuras ("RECTANGULO", "4", "4")

figura1.mostrarDetalles()
figura2.mostrarDetalles()
figura3.mostrarDetalles()