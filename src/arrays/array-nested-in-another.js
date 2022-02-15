'use strict';

/**
 * Crear una funcion que retorne true if el primer array pasado como
 * argumento de la funcion puede ser anidado en el segundo array
 * pasado como argumento de la funcion.
 * 
 * El primer array puede ser nesteado dentro del segundo si:
 * 
 * 1. El numero mas pequeño del primer array el mayor que el numero mas
 *    pequeño del segundo array.
 * 
 * 2. El numero mas grande del primer array es menor que el numero mas
 *    grande del segundo array.
 * 
 * 3. Si alguno de los dos array no tiene elementos retorne null
 * 
 * ejemplos:
 * canNest([1, 2, 3, 4], [0, 6]) ➞ true
 * canNest([3, 1], [4, 0]) ➞ true
 * canNest([9, 9, 8], [8, 9]) ➞ false
 * canNest([1, 2, 3, 4], [2, 3]) ➞ false
 * canNest([], [1,3]) ➞ null
 * canNest([], []) ➞ null
 * 
 * 
 * @param {Array} array1
 * @param {Array} array2
 * @returns {(boolean|null)}
 */

function canNest(array1, array2) {
  
}

module.exports = canNest;