// Selecciona el contenedor donde se mostrará la salida
const output = document.getElementById("output");

// Clase Médico
class Medico {
    constructor(nombre, especialidad, hospital, aniosExperiencia) {
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.hospital = hospital;
        this.aniosExperiencia = aniosExperiencia;
    }

    trabajar() {
        output.innerHTML += "<hr>";
        output.innerHTML += `<p>Médico: ${this.nombre}</p>`;
        output.innerHTML += `<p>Especialidad: ${this.especialidad}</p>`;
        output.innerHTML += `<p>Hospital: ${this.hospital}</p>`;
        output.innerHTML += `<p>Años de experiencia: ${this.aniosExperiencia}</p>`;
        output.innerHTML += `<p>Descripción: Un médico se encarga de diagnosticar y tratar enfermedades.</p>`;
    }
}

// Clase Ingeniero
class Ingeniero {
    constructor(nombre, especialidad, empresa, proyectos) {
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.empresa = empresa;
        this.proyectos = proyectos;
    }

    trabajar() {
        output.innerHTML += "<hr>";
        output.innerHTML += `<p>Ingeniero: ${this.nombre}</p>`;
        output.innerHTML += `<p>Especialidad: ${this.especialidad}</p>`;
        output.innerHTML += `<p>Empresa: ${this.empresa}</p>`;
        output.innerHTML += `<p>Proyectos a cargo: ${this.proyectos}</p>`;
        output.innerHTML += `<p>Descripción: Un ingeniero diseña y desarrolla soluciones técnicas a problemas.</p>`;
    }
}

// Clase Docente
class Docente {
    constructor(nombre, materia, escuela, aniosEnseñanza) {
        this.nombre = nombre;
        this.materia = materia;
        this.escuela = escuela;
        this.aniosEnseñanza = aniosEnseñanza;
    }

    trabajar() {
        output.innerHTML += "<hr>";
        output.innerHTML += `<p>Docente: ${this.nombre}</p>`;
        output.innerHTML += `<p>Materia: ${this.materia}</p>`;
        output.innerHTML += `<p>Escuela: ${this.escuela}</p>`;
        output.innerHTML += `<p>Años de enseñanza: ${this.aniosEnseñanza}</p>`;
        output.innerHTML += `<p>Descripción: Un docente se dedica a la educación y formación de estudiantes, transmitiendo conocimientos y valores.</p>`;
    }
}

// Función que muestra la información de cualquier tipo de profesional
function mostrarInformacion(profesional) {
    profesional.trabajar();
}

// Crear instancias de cada clase
const objetoMedico = new Medico("Dr. Jorge Oviedo", "Cardiología", "Hospital Central", 10);
const objetoIngeniero = new Ingeniero("Ing. Keyler Hernandez", "Civil", "Construcciones XYZ", "5 grandes obras");
const objetoDocente = new Docente("Prof. Maria Sierra", "Matemáticas", "Colegio Nacional", 15);  

// Llamar a la función mostrarInformacion para cada objeto
mostrarInformacion(objetoMedico);
mostrarInformacion(objetoIngeniero);
mostrarInformacion(objetoDocente);
