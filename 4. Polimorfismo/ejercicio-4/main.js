// Selecciona el contenedor donde se mostrará la salida
const output = document.getElementById("output");

// Clase InstrumentoMusical
class InstrumentoMusical {
    constructor(nombre) {
        this.nombre = nombre;
    }

    tocar() {
        output.innerHTML += `<p>${this.nombre} es un instrumento musical.</p>`;
    }
}

// Clase Guitarra que hereda de InstrumentoMusical
class Guitarra extends InstrumentoMusical {
    constructor(nombre, tipo, cuerdas, material) {
        super(nombre);
        this.tipo = tipo;
        this.cuerdas = cuerdas;
        this.material = material;
    }

    tocar() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `<p>Instrumento: Guitarra</p>`;
        output.innerHTML += `<p>Nombre: ${this.nombre}</p>`;
        output.innerHTML += `<p>Tipo: ${this.tipo}</p>`;
        output.innerHTML += `<p>Cuerdas: ${this.cuerdas}</p>`;
        output.innerHTML += `<p>Material: ${this.material}</p>`;
        output.innerHTML += `<p>Sonido: de cuerdas metálicas.</p><br>`;
    }
}

// Clase Piano que hereda de InstrumentoMusical
class Piano extends InstrumentoMusical {
    constructor(nombre, tipo, numeroTeclas, materialCuerdas) {
        super(nombre);
        this.tipo = tipo;
        this.numeroTeclas = numeroTeclas;
        this.materialCuerdas = materialCuerdas;
    }

    tocar() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `<p>Instrumento: Piano</p>`;
        output.innerHTML += `<p>Nombre: ${this.nombre}</p>`;
        output.innerHTML += `<p>Tipo: ${this.tipo}</p>`;
        output.innerHTML += `<p>Número de teclas: ${this.numeroTeclas}</p>`;
        output.innerHTML += `<p>Material de las cuerdas: ${this.materialCuerdas}</p>`;
        output.innerHTML += `<p>Sonido: Notas al presionar las teclas.</p><br>`;
    }
}

// Clase Trompeta que hereda de InstrumentoMusical
class Trompeta extends InstrumentoMusical {
    constructor(nombre, material, tipoBoquilla) {
        super(nombre);
        this.material = material;
        this.tipoBoquilla = tipoBoquilla;
    }

    tocar() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `<p>Instrumento: Trompeta</p>`;
        output.innerHTML += `<p>Nombre: ${this.nombre}</p>`;
        output.innerHTML += `<p>Material: ${this.material}</p>`;
        output.innerHTML += `<p>Tipo de Boquilla: ${this.tipoBoquilla}</p>`;
        output.innerHTML += `<p>Sonido: muy lindo al soplar la boquilla.</p><br>`;
    }
}

// Función que muestra la información técnica y sonora de cualquier instrumento
function tocarInstrumento(instrumento) {
    instrumento.tocar();
}

// Crear instancias de cada clase
const objetoGuitarra = new Guitarra("Fender Stratocaster", "Eléctrica", 6, "Madera de aliso");
const objetoPiano = new Piano("Yamaha C7", "Gran cola", 88, "Acero");
const objetoTrompeta = new Trompeta("Bach Stradivarius", "Latón", "Standard");

// Llamar a la función tocarInstrumento para cada objeto
tocarInstrumento(objetoGuitarra);
tocarInstrumento(objetoPiano);
tocarInstrumento(objetoTrompeta);
