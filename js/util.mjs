export function formato(valor){
let cantidad = valor.toLocalString('es_MX', { style: 'currency', currency: 'MXN' })

return cantidad

}
