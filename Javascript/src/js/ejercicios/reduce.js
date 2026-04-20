// Referencia: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

/**
 * CONSIGNA FINAL: Dada una lista de contactos, crear una funcion que agrupe los 
 * contactos segun la primera letra de su nombre (nombre completo). 
 * Esta seria la estructura esperada:
 * 
 * {
 * 
 *    M: [{}, {}, ..., {} ],
 *    C: [{}, {}, ..., {}]
 *    L: [{nombreCompleto: "Landa, Gabriel", edad: 48, telefono: "22-121-941"}, ..., {}]
 * 
 * }
 * 
 */
import {personas, EDAD_MINIMA} from "./personas.js";

function ordenarPorNombre(personas){
    return personas.map(
        persona => {
            return(
                {
                    nombreCompleto: `${persona.firstName}, ${persona.lastName}`,
                    edad: persona.age
                }
            )
        }
    )
}

function listarContactosPorLetra(personas){
    console.log(personas.sort((a, b) => a.nombreCompleto.localeCompare(b.nombreCompleto)));
}

const ordenados = ordenarPorNombre(personas);

function agruparPorLetra(personas){
    return personas.reduce((agrupados, persona) => {
            let letra = persona.nombreCompleto[0];
            if(!agrupados[letra]){
                agrupados[letra] = [];
            }
            agrupados[letra].push(persona)
            
            return agrupados;
        }
    , {})
}

console.log(agruparPorLetra(ordenados));