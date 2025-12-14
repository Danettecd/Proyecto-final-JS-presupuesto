//define ahora las clases hijas 
class Ingreso extends Dato {

    static contadorIngresos = 0;

    constructor(descripcion, valor) {
        super(descripcion, valor);
        // Define _id y realiza el preincremento a la variable estática
        this._id = ++Ingreso.contadorIngresos; 
    }
// Método get para id
    get id() {
        return this._id;
    }
}
