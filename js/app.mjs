//llamar a las funciones

// origen de los datos 
//select -> tipo
//input -> descripcion
//input -> valor

import { Egreso } from "./Egreso.mjs"
import { Ingreso } from "./Ingreso.mjs"

let ingresos = [];
let egresos = [];


Window.onload = function () {
    window.ingresos = ingresos
    window.egresos = egresos

    document.getElementById('agregar').addEventListener('click', agregar)
}

function agregar() {
    let isIngreso = document.getElementById('tipo').value == 'Ingreso'
    let txtDescripcion = document.getElementById('descripcion').value
    let monto = document.getElementById('valor').value

    let nuevoRegistro

    if (isIngreso) {
        let ganancia = new Ingreso(monto, txtDescripcion)
        ingresos.push(ganancia)
        console.log('ingresos', ingresos);
    } else {
        let gasto = new Egreso(monto, txtDescripcion)
        egresos.push(gasto)
        console.log('egresos', egresos);
    }
}