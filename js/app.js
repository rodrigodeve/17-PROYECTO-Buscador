//variables

const resultado = document.querySelector('#resultado');
const max = new Date().getFullYear();
const min = max - 10;

const marca = document.querySelector('#marca');
const modelo = document.querySelector('#modelo');
const year = document.querySelector('#year');
const precio = document.querySelector('#precio');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


const datosBusqueda = {
    marca: '',
    modelo: '',
    year: '',
    minimo: '',
    maximo:'',
    puertas: '',
    transmision:'',
    color:''
}

for (let i = max; i >= min ;i--) {
    const option = document.createElement('option');
    option.textContent = i;
    option.value = i;
    document.querySelector('#year').appendChild(option);
}

//cargar eventos
document.addEventListener('DOMContentLoaded', () => {

    mostrarResultado();

});

marca.addEventListener('change', e => {
datosBusqueda.marca = e.target.value;
filtrarAuto();

});

year.addEventListener('change', e => {
datosBusqueda.year = Number(e.target.value);
filtrarAuto();
});

puertas.addEventListener('change', e => {
datosBusqueda.puertas = e.target.value;
filtrarAuto();
});

minimo.addEventListener('change', e => {
datosBusqueda.minimo = e.target.value;
filtrarAuto();
});

maximo.addEventListener('change', e => {
datosBusqueda.maximo = e.target.value;
filtrarAuto();
});

transmision.addEventListener('change', e => {
datosBusqueda.transmision = e.target.value;
filtrarAuto();
});
color.addEventListener('change', e => {
datosBusqueda.color = e.target.value;
filtrarAuto();
});





// funciones

function mostrarResultado(){
    
    autos.forEach( auto =>{
        const { marca, modelo ,year,precio,puertas,color,transmision} = auto;
        const opcion = document.createElement('P');
        opcion.textContent = `
             ${marca}  ${modelo} -  ${year}  Precio: ${precio} - Puertas: ${puertas} - Color:  ${color} - Transmision:  ${transmision}
        `
        resultado.appendChild(opcion);
    }) ;
}

function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear);
    console.log(resultado);
}

function filtrarMarca(auto){
    if (datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca;
    }else{
        return auto;
    }
}

function filtrarYear(auto) {
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year;
    }
    return auto;
}





