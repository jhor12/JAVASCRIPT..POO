// Clase base abstracta Empleado
class Empleado {
    calcular_salario() {
        throw new Error("Este método debe ser implementado por la subclase");
    }
}

// Clase EmpleadoTiempoCompleto que hereda de Empleado
class EmpleadoTiempoCompleto extends Empleado {
    constructor(meses_trabajados, salario_mensual) {
        super();
        this.meses_trabajados = meses_trabajados;
        this.salario_mensual = salario_mensual;
    }

    calcular_salario() {
        return this.meses_trabajados * this.salario_mensual;
    }
}

// Clase EmpleadoPorHoras que hereda de Empleado
class EmpleadoPorHoras extends Empleado {
    constructor(horas_trabajadas, tarifa_por_hora) {
        super();
        this.horas_trabajadas = horas_trabajadas;
        this.tarifa_por_hora = tarifa_por_hora;
    }

    calcular_salario() {
        return this.horas_trabajadas * this.tarifa_por_hora;
    }
}

// Uso de las clases y mostrar los resultados en el HTML
const empleadoTiempoCompleto = new EmpleadoTiempoCompleto(8, 60000);  // 8 meses, salario de 60000 por mes
const empleadoPorHoras = new EmpleadoPorHoras(120, 16000);  // 120 horas trabajadas, tarifa de 16000 por hora

// Seleccionamos el div donde se mostrará el resultado
const output = document.getElementById('output');
output.innerHTML = `
    <p>Empleado por tiempo completo: ${empleadoTiempoCompleto.calcular_salario()}</p>
    <p>Empleado por horas: ${empleadoPorHoras.calcular_salario()}</p>
`;
