// Clase base abstracta TareaEmpleado
class TareaEmpleado {
    realizar_tarea() {
        throw new Error("Este método debe ser implementado por la subclase");
    }
}

// Clase Ingeniero que hereda de TareaEmpleado
class Ingeniero extends TareaEmpleado {
    realizar_tarea() {
        return "El Ingeniero está desarrollando una aplicación.";
    }
}

// Clase Doctor que hereda de TareaEmpleado
class Doctor extends TareaEmpleado {
    realizar_tarea() {
        return "El Doctor está en una consulta médica.";
    }
}

// Uso de las clases y mostrar los resultados en el HTML
const ingeniero = new Ingeniero();
const doctor = new Doctor();

// Seleccionamos el div donde se mostrará el resultado
const output = document.getElementById('output');
output.innerHTML = `
    <p>${ingeniero.realizar_tarea()}</p>
    <p>${doctor.realizar_tarea()}</p>
`;
