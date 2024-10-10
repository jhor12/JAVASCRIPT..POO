//Defino la clase
class Animales{
    //Metodo constructor
    constructor(nombre, tamaño, años, color){
        this.nombre = nombre //Propiedades para la instancia
        this.tamaño = tamaño
        this.años = años
        this.color = color
    }

    //Metodo para mostrar detalles del objeto
    mostrarDetalles(){
        document.write("<h3>Nimales</h3><br>")
        document.write("Mombre: "+this.nombre+"<br>")
        document.write("tamaño: "+this.tamaño+"<br>")
        document.write("años: "+this.años+"<br>")
        document.write("color: "+this.color+" <br>")
        document.write("<hr>")
        
    }
    especie(){
        //defino el atributo privado energia solo para metodo especie
        let animal = parseInt(prompt("Digite el nombre de los animales mostrados en pantalla: mariposa/conejo/serpiente" ));
        //Evaluamos que especie es el animal 
        if (animal = "mariposa"){
            document.write("El animal "+ this.nombre+ " es de especie Lepidópteros <br>"); 
        }else if (animal = "conejo"){
            document.write("El animal "+ this.nombre+ " es de especie Mamífero <br>");
        }else if (animal = "serpiente"){ 
            document.write("El animal "+ this.nombre+ " es de especie Reptil <br>");
        }else{
            document.write("El animal digitado no se encuentra");  
            
        }    
    }   
}

//Creamos los objetos
let animal1 = new Animales("MARIPOSA", "16 CM", "1 ", "AZUL")
let animal2 = new Animales("CONEJO", "22 CM", "2", "BLANCO")
let animal3 = new Animales("SERPIENTE", "32 CM", "3", "VERDE")

animal1.mostrarDetalles()
animal1.especie()
animal2.mostrarDetalles()
animal2.especie()
animal3.mostrarDetalles()
animal3.especie()