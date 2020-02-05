import {ArrayOrdenado} from "./ArrayOrdenado.js";


let ordenar = new ArrayOrdenado(function(a,b){ return (a-b)});

[2,4,5,3,1].forEach( el => ordenar.insert(el));

console.log(ordenar.contenido);

