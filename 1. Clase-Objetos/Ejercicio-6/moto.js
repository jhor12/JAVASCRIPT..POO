//Defino la clase
class Moto{
    //Metodo constructor
    constructor(modelo, marca, color, placa){
        this.modelo = modelo //Propiedades para la instancia
        this.marca = marca
        this.color = color
        this.placa = placa
        
    }

    //Metodo para mostrar detalles del objeto
    mostrarDetalles(){
        document.write("<h3>Motos</h3><br>")
        document.write("modelo: "+this.modelo+"<br>")
        document.write("marca: "+this.marca+"<br>")
        document.write("color: "+this.color+" <br>")
        document.write("placa: "+this.placa+" <br>")
        document.write("<hr>")
        
    }

    encender(){
        //defino el atributo privado energia solo para metodo encender
        let gasolina = parseInt(prompt("Digite la cantidad de gasolina que tiene la moto: " ));
        //Evaluamos si tiene carga el celular 
        if (gasolina >0 ){
            document.write("La moto "+ this.modelo+ " se puede encender <br>");
            document.write(`||||||||| ${gasolina} $ de gasolina <br>`); 
            document.write("<hr>");
        }
        else {
            document.write("La moto "+ this.modelo + "no se puede encender <br>")
            document.write(`||||||||| ${gasolina} $ de gasolina <br>`);
            document.write("<hr>");

            
        }    
    }
} 


//Creamos los objetos
let moto1 = new Moto ("BOXER S PRO", "BOXER", "NEGRO", "MFX-97A")
let moto2 = new Moto ("BOXER CT100 KS","BOXER", "AZUL", "FSM-92S")
let moto3 = new Moto ("XTZ 150", "YAMAHA", "ROJO", "MAF-28B")

moto1.mostrarDetalles()
moto1.encender()
moto2.mostrarDetalles()
moto2.encender()
moto3.mostrarDetalles()
moto3.encender()