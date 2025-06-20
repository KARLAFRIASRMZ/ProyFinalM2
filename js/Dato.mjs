export class Dato {
    _valor
    _descripcion
    _tipo

    constructor(valor, descripcion,tipo) {
        this.setValor(valor)
        this._descripcion = descripcion
        this._tipo = tipo
    }

    setValor(value) {
        let nuevo = parseInt(value)
        console.log(nuevo)

        //Nan = Not A Number
        if (!isNaN(nuevo)) {
            this._valor = nuevo
        } else {
            this._valor = 0
        }

    }
}