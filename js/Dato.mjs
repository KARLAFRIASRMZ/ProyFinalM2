export class Dato {
    _valor
    _descripcion
    _tipo

    constructor(valor, descripcion) {
        this.setValor(valor)
        this._descripcion = descripcion
        this.tipo = tipo
    }

    setValor(value) {
        let nuevo = parseInt(valor)
        //Nan = Not A Number
        if (!isNaN(nuevo)) {
            this._valor = this.valor
        } else {
            this._Valor = 0
        }

    }
}