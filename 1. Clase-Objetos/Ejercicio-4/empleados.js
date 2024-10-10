//Defino la clase
class Empleados{
    //Metodo constructor
    constructor(trabajo, estatura, sexo, años){
        this.trabajo = trabajo //Propiedades para la instancia
        this.estatura = estatura
        this.sexo = sexo
        this.años = años
        
    }

    //Metodo para mostrar detalles del objeto
    mostrarDetalles(){
        document.write("<h3>Empleados</h3><br>")
        document.write("trabajo: "+this.trabajo+"<br>")
        document.write("estatura: "+this.estatura+"<br>")
        document.write("sexo: "+this.sexo+" <br>")
        document.write("años: "+this.años+"<br>")
        document.write("<hr>")
        
    }

} 

//Creamos los objetos
let empleado1 = new Empleados ("ALBAÑIL", "168", "MASCULINO", "38")
let empleado2 = new Empleados ("DOCTORA","156", "FEMENINO", "26")
let empleado3 = new Empleados ("COCINERA", "163", "FEMENINO", "28")

empleado1.mostrarDetalles()
empleado2.mostrarDetalles()
empleado3.mostrarDetalles()