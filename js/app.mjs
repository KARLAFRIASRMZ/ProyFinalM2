//llamar a las funciones

// origen de los datos 
//select -> tipo
//input -> descripcion
//input -> valor

import { Egreso } from "./Egreso.mjs"
import { Ingreso } from "./Ingreso.mjs"

let ingresos = [];
let egresos = [];
let totalIng = 0
let totalEgr = 0
let totalTotales = 0

window.onload = function () {
    window.ingresos = ingresos
    window.egresos = egresos


    //Para el boton agregar
    document.getElementById('agregar').addEventListener('click', agregar)

    //Para el boton eliminar
    document.getElementById('lista-ingresos').addEventListener('click', eliminar)
    document.getElementById('lista-egresos').addEventListener('click', eliminar2)
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
        totalIng = totalIng + parseInt(monto)
        totalTotales = totalTotales + parseInt(monto)
        //Actualizar lista de ingresos
        let html = ""
        ingresos.forEach((item, indice) => {
            html += item.getVista(indice)
        })
        document.getElementById('lista-ingresos').innerHTML = html
        let html3 = ""
        html3 =  `<div class="presupuesto_ingreso--valor">+${totalIng.toLocaleString("es-MX", { style: "currency", currency: "MXN" })}</div>`
        document.getElementById('pres_ing_valor').innerHTML = html3


    } else {
        let gasto = new Egreso(monto, txtDescripcion)
        egresos.push(gasto)
        console.log('egresos', egresos);
        totalEgr = totalEgr + parseInt(monto)
        totalTotales = totalTotales - parseInt(monto)
        //Actualizar lista de ingresos
        let html2 = ""
        egresos.forEach((item, indice) => {
            html2 += item.getVista2(indice)
        })
        document.getElementById('lista-egresos').innerHTML = html2
        let html4 = ""
        html4 = `<div class="presupuesto_egreso--valor">-${totalEgr.toLocaleString("es-MX", { style: "currency", currency: "MXN" })}</div>`
        document.getElementById('pres_egr_valor').innerHTML = html4
    }
    let html5 = ""
    html5=`<div id="ppto_valor" class="presupuesto_valor">${totalTotales.toLocaleString("es-MX", { style: "currency", currency: "MXN" })}</div>`
    document.getElementById('ppto_valor').innerHTML = html5
    /* let html6 = ""
    html6 = `<input id="descripcion" type="text" class="agregar_descripcion" placeholder="Agregar Descripcion" />`
    document.getElementById('descripcion').innerHTML = html6 */
    document.getElementById('descripcion').value = ""
    document.getElementById('valor').value = ""
}

function eliminar(event) {
    let monto = document.getElementById('valor').value
    let obj = event.target

    if (obj.name == 'close-circle-outline') {

        let id = obj.dataset.index

        console.log('se dio un click', id)

        ingresos.splice(id, 1)

        totalIng = totalIng - monto
        totalTotales = totalTotales - monto

        let html = ""
        ingresos.forEach((item, indice) => {
            html += item.getVista(indice)
        })
        document.getElementById('lista-ingresos').innerHTML = html
        let html5 = ""
        html5=`<div id="ppto_valor" class="presupuesto_valor">${totalTotales.toLocaleString("es-MX", { style: "currency", currency: "MXN" })}</div>`
        document.getElementById('ppto_valor').innerHTML = html5
    }
}

function eliminar2(event) {
    let monto = document.getElementById('valor').value
    let obj = event.target

    if (obj.name == 'close-circle-outline') {

        let id = obj.dataset.index

        console.log('se dio un click', id)

        egresos.splice(id, 1)

        totalEgr = totalEgr - monto
        totalTotales = totalTotales - monto

        let html = ""
        egresos.forEach((item, indice) => {
            html += item.getVista(indice)
        })
        document.getElementById('lista-egresos').innerHTML = html
        let html5 = ""
        html5=`<div id="ppto_valor" class="presupuesto_valor">${totalTotales.toLocaleString("es-MX", { style: "currency", currency: "MXN" })}</div>`
        document.getElementById('ppto_valor').innerHTML = html5
    }
}