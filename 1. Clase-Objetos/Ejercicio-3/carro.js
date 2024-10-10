//Defino la clase
class Carro{
    //Metodo constructor
    constructor(modelo, marca, color, placa){
        this.modelo = modelo //Propiedades para la instancia
        this.marca = marca
        this.color = color
        this.placa = placa
        
    }

    //Metodo para mostrar detalles del objeto
    mostrarDetalles(){
        document.write("<h3>Carros</h3><br>")
        document.write("modelo: "+this.modelo+"<br>")
        document.write("marca: "+this.marca+"<br>")
        document.write("color: "+this.color+" <br>")
        document.write("placa: "+this.placa+"<br>")
        document.write("<hr>")
        
    }

    encender(){
        //defino el atributo privado energia solo para metodo encender
        let gasolina = parseInt(prompt("Digite la cantidad de gasolina que tiene el carro: " ));
        //Evaluamos si tiene gasolina el carro
        if (gasolina >0 ){
            document.write("el carro "+ this.modelo+ " se puede encender <br>");
            document.write(`||||||||| ${gasolina} $ de gasolina <br>`); 
            document.write("<hr>");
        }
        else {
            document.write("el carro "+ this.modelo + "no se puede encender <br>")
            document.write(`||||||||| ${gasolina} $ de gasolina <br>`);
            document.write("<hr>");

            
        }    
    }

} 

//Creamos los objetos
let carro1 = new Carro ("S-CROSS NEW", "SUZUKY", "ROJO", "XXR-882")
let carro2 = new Carro("SELDOS", "KIA", "AZUL", "MNW-281")
let carro3 = new Carro("PATROL", "NISSAN", "BLANCO", "MFX-692")

carro1.mostrarDetalles()
carro1.encender()
carro2.mostrarDetalles()
carro2.encender
carro3.mostrarDetalles()
carro3.encender
