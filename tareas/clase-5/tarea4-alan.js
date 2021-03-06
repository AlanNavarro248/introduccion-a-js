//TAREA4: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

let $listadoDeNumeros = document.querySelectorAll("li");
let numeros = [];

for(let i = 0; i < $listadoDeNumeros.length ; i++){
    numeros.push(Number($listadoDeNumeros[i].innerText));
}

function calcularPromedio(numeros){

    let suma = 0;
    let promedio = 0;   

    for(let i = 0; i < numeros.length ; i++){
        suma += numeros[i];
    }

    promedio = suma / numeros.length;

    return promedio.toFixed(2);

}

function obtenerNumeroMenor(numeros){

    let numMenor = numeros[0];

    for(i = 0; i < numeros.length ; i++){

        if( numMenor >= numeros[i] ){
            numMenor = numeros[i];
        }
    }
    
    return numMenor;
}

function obtenerNumeroMayor(numeros){
    
    let numMayor = numeros[0];

    for(let i = 0; i < numeros.length; i++){

        if( numMayor <= numeros[i] ){ 
            numMayor = numeros[i];
        }
    }

    return numMayor;
}

function obtenerNumeroMasFrecuente(numeros){

    let numeroMasFrecuente = 0;
    let contadorMayor = 0;

   for(let i = 0; i < numeros.length; i++){    
        let numeroActual = numeros[i];
        let contadorActual = 0;

        for(let j = 0; j < numeros.length; j++){

            if(numeroActual == numeros[j]){
                contadorActual++;
            }

            if(contadorActual > contadorMayor){
                numeroMasFrecuente = numeroActual;
                contadorMayor = contadorActual;
            }
       }
   }

 return numeroMasFrecuente;

}

const $botonResolver = document.querySelector("#resolver");

$botonResolver.onclick = function(){
  
    const valorPromedio = calcularPromedio(numeros);
    document.querySelector("#resultado-promedio").innerText = `El valor promedio es de ${valorPromedio}.`;

    const valorNumMenor = obtenerNumeroMenor(numeros);
    document.querySelector("#resultado-menor").innerText =  `El numero menor es ${valorNumMenor}.`;

    const valorNumMayor = obtenerNumeroMayor(numeros);
    document.querySelector("#resultado-mayor").innerText = `El numero mayor es ${valorNumMayor}.`;

    const valorNumMasFrecuente = obtenerNumeroMasFrecuente(numeros);
    document.querySelector("#resultado-frecuente").innerText = `El numero mas frecuente es ${valorNumMasFrecuente}.`;

}
