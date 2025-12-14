// Crear clase padre y agregar constructor
class Dato {
    constructor(descripcion, valor) {
        this._descripcion = descripcion;
        this._valor = valor;
    }

    // Agrega los métodos get y set para el atributo descripción
    get descripcion() {
        return this._descripcion;
    }

    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }

//Agrega los métodos get y set para el atributo valor
    get valor() {
        return this._valor;
    }

    set valor(valor) {
        this._valor = valor;
    }
}

