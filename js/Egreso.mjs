
import { Dato } from "./Dato.mjs"
import {formato} from "./util.mjs"

export class Egreso extends Dato {

    constructor(valor, descripcion) {
        super(valor, descripcion, 'Egreso')
    }

    getValor2() {
        let cantidad = 0
        cantidad = this._valor
        return "-" + cantidad.toLocaleString("es-MX", { style: "currency", currency: "MXN" })
    }

    getVista2(id) {
        return `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${this._descripcion}</div>
                <div class="derecha limpiarEstilos">
                    <div class="elemento_valor">${this.getValor2()}</div>
                    <div class="elemento_eliminar" data-index=${id}>
                        <button type="button" class="elemento_eliminar--btn" data-index="${id}">
                            <ion-icon name="close-circle-outline" data-index=${id}></ion-icon>
                        </button>
                    </div>
                </div>
            </div> `
    }

}