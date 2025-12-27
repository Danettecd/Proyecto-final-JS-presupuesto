// Arreglo ingreso
const ingresos = [];
// Arreglo egreso
const egresos = [];


//Funcion totalIngresos 
const totalIngresos = () => {
    let totalIngreso = 0;
    for (let ingreso of ingresos) {
        totalIngreso += ingreso.valor;  
        }
    return totalIngreso;
}
//Funcion totalEgresos
const totalEgresos = () => {
    let totalEgreso = 0;
    for (let egreso of egresos) {
        totalEgreso += egreso.valor;     
    }
    return totalEgreso;
}

// Formato moneda
const formatoMoneda = (valor) => {
    return valor.toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2
    });
};
// Formato porcentaje
const formatoPorcentaje = (valor) => {
    return (valor * 100).toFixed(2) + "%";
};

// funcion cargarApp
const cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
};

// funcion cargar Cabecero
const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
   let porcentajeEgreso = totalIngresos() > 0
    ? totalEgresos() / totalIngresos()
    : 0;


    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
    document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById("ingresos").innerHTML = formatoMoneda(totalIngresos());
    document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
};

//funcion cargar Ingresos
const cargarIngresos =()=> { 
    let ingresosHTML= ""; 
    for (let ingreso of ingresos) { 
        ingresosHTML += crearIngresoHTML (ingreso);
     }
    document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
};

//funcion crear Ingresos
const crearIngresoHTML = (ingreso) => { 
    let ingresoHTML =`
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${ingreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
                <div class="elemento_eliminar">
                    <button onclick="eliminarIngreso(${ingreso.id})">
                        <ion-icon name="close-circle-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    `;
    return ingresoHTML;
};



//eliminar ingreso
const eliminarIngreso = (id) => { 
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id); 
    ingresos.splice(indiceEliminar, 1); 
    cargarCabecero(); 
    cargarIngresos();
 };

//funcion cargarEgresos
const cargarEgresos = () => {
    let egresosHTML = ""; 
    for (let egreso of egresos) { 
        egresosHTML += crearEgresoHTML(egreso); 
    } 
    document.getElementById("lista-egresos").innerHTML = egresosHTML; 
};
//funcion crear egresos
const crearEgresoHTML = (egreso) => { 
    let porcentaje = 0;

    if (totalIngresos() > 0) {
        porcentaje = egreso.valor / totalIngresos();
    }

    let egresoHTML = `
        <div class="elemento limpiarEstilos"> 
            <div class="elemento_descripcion">${egreso.descripcion}</div> 

            <div class="derecha limpiarEstilos"> 
                <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div> 

                <div class="elemento_porcentaje">
                    ${formatoPorcentaje(porcentaje)}
                </div>

                <div class="elemento_eliminar">
                    <button onclick="eliminarEgreso(${egreso.id})">
                        <ion-icon name="close-circle-outline"></ion-icon>
                    </button>
                </div> 
            </div>
        </div>`;
        
    return egresoHTML; 
};



// funcion eliminar egreso
const eliminarEgreso = (id) => {
   let indiceEliminar = egresos.findIndex(egreso => egreso.id === id); 
   egresos.splice(indiceEliminar, 1); 
   cargarCabecero(); 
   cargarEgresos(); 
};

// Agregar dato
const agregarDato = () => {
     let forma = document.getElementById("forma"); 
     let tipo = forma.tipo.value; 
     let descripcion = forma.descripcion.value; 
     let valor = parseFloat(forma.valor.value); 
     if (descripcion !== "" && !isNaN(valor))


        if (tipo === "ingreso") { 
            ingresos.push(new Ingreso(descripcion, valor)); 
            cargarIngresos(); } 
            else { 
                egresos.push(new Egreso(descripcion, valor));
            cargarEgresos(); 
        }
    cargarCabecero();

 };
        



