//Defino la clase
class Celular{
    //Metodo constructor
    constructor(nombre, marca, imei, ram, bateria){
        this.nombre = nombre //Propiedades para la instancia
        this.marca = marca
        this.imei = imei
        this.ram = ram
        this.bateria = bateria

    }

    //Metodo para mostrar detalles del objeto
    mostrarDetalles(){
        document.write("<h3>Dispositivo Movil</h3><br>")
        document.write("Mombre: "+this.nombre+"<br>")
        document.write("Marca: "+this.marca+"<br>")
        document.write("Imei: "+this.imei+"<br>")
        document.write("Ram: "+this.ram+" <br>")
        document.write("Bateria: "+this.bateria+" <br>")
        document.write("<hr>")
        
    }
    encender(){
        //defino el atributo privado energia solo para metodo encender
        let energia = parseInt(prompt("Digite el valor de la carga: " ));
        //Evaluamos si tiene carga el celular 
        if (energia >0 ){
            document.write("El celular "+ this.nombre+ " se puede encender <br>");
            document.write(`||||||||| ${energia} % de carga <br>`); 
            document.write("<hr>");
        }
        else {
            document.write("El celular "+ this.nombre + "no se puede encender <br>")
            document.write(`||||||||| ${energia} % de carga <br>`);
            document.write("<hr>");
        }
            
        }    
}
   
//Creamos los objetos
let celular1 = new Celular("HUAWEI Y9", "HUAWEI", "92593", "160", "6000 MAH")
let celular2 = new Celular("OPPO RENO 7", "63952", "256", "2000 MAH")
let celular3 = new Celular("MOTOROLA G60", "MOTOROLA", "49627", "128", "BATERIA 7000 MAH")

celular1.mostrarDetalles()
celular1.encender()
celular2.mostrarDetalles()
celular2.encender()
celular3.mostrarDetalles()
celular3.encender()