

document.querySelector("#agregar-integrante").onclick = function(){
    
    const indice = crearIndice();

    crearIntegrante(indice);
    mostrarBotonCalcular();
    mostrarBotonReiniciar();
}

function crearIntegrante(indice){

    const $contenedorIntegrante = document.createElement("div");
    $contenedorIntegrante.className = "integrante";

    const $etiquetaIntegrante = document.createElement("label");
    $etiquetaIntegrante.innerText = `Integrante N°${indice + 1}`;

    const $inputIntegrante = document.createElement("input");
    $inputIntegrante.className = "salarioIntegrante";
    $inputIntegrante.type = "number";

    const $contenedorIntegrantes = document.querySelector("#integrantes");    
   
    $contenedorIntegrante.appendChild($etiquetaIntegrante);
    $contenedorIntegrante.appendChild($inputIntegrante);
    $contenedorIntegrantes.appendChild($contenedorIntegrante);

}


document.querySelector("#borrar-integrante").onclick = borrarIntegrante;

function borrarIntegrante(){
    document.querySelector("#integrantes").lastChild.remove();
}

function borrarTodosLosIntegrantes(){
   let $integrantes = document.querySelectorAll(".integrante");

    for(let i = 0; i < $integrantes.length; i++){
        
        $integrantes[i].remove();
     }
}

document.querySelector("#boton-calcular").onclick = function(){
    
    const salarios = obtenerSalarios();
    const salariosAnuales = obtenerSalarioAnual(salarios);
    
   
   document.querySelector("#mayor-salario-anual").innerText = obtenerSalarioAnualMayor(salariosAnuales);
   document.querySelector("#menor-salario-anual").innerText = obtenerSalarioAnualMenor(salariosAnuales);
   document.querySelector("#salario-anual-promedio").innerText = obtenerSalarioAnualPromedio(salariosAnuales);
   document.querySelector("#salario-mensual-promedio").innerText = obtenerSalarioMensualPromedio(salarios);

   mostrarResultados();
}

document.querySelector("#boton-reiniciar").onclick = reiniciar;
function reiniciar(){
    borrarTodosLosIntegrantes();
    ocultarResultados();
    ocultarBotonReiniciar();
    ocultarBotonCalcular();
}


function crearIndice(){
    let $indice = document.querySelectorAll(".integrante");
    indice = $indice.length;
    
    return indice;
}


// Obtener salarios mensuales y anuales

function obtenerSalarios(){
    const $salarioIntegrante = document.querySelectorAll(".salarioIntegrante");
    const salarios = [];

    for(let i = 0; i < $salarioIntegrante.length; i++){

        if($salarioIntegrante[i].value === 0 || $salarioIntegrante[i].value === ""){
            continue;
        }

       salarios.push(Number($salarioIntegrante[i].value));
        
    }

    return salarios;

}

function obtenerSalarioAnual(salarios){
    const MESES_EN_EL_AÑO = 12;
    const salariosAnuales = [];
    
    for(let i = 0; i < salarios.length ; i++){
    
        let salarioAnual = salarios[i] * MESES_EN_EL_AÑO;
        salariosAnuales.push(salarioAnual);
    } 
    
    return salariosAnuales;
}
    

// Ocultar y/o mostrar botones e información

function mostrarBotonCalcular(){
    document.querySelector("#boton-calcular").className = "";
}

function mostrarBotonReiniciar(){
    document.querySelector("#boton-reiniciar").className = "";
}

function mostrarResultados(){
    document.querySelector("#resultados").className = "";
}

function ocultarResultados(){
    document.querySelector("#resultados").className = "oculto";
}

function ocultarBotonReiniciar(){
    document.querySelector("#boton-reiniciar").className = "oculto";
}

function ocultarBotonCalcular(){
    document.querySelector("#boton-calcular").className = "oculto";
}
