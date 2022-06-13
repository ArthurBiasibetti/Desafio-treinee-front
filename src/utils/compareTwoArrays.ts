/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @description
 * Retorna se os arrays são iguais.
 * Exemplo de uso:
 * formatDate(array1, array2);
 * @param {Array} array1
 * @param {Array} array2
 * @return {Boolean} true or false
 */

const compareTwoArrays = <T, _>(array1: T[], array2: T[]): boolean =>
  JSON.stringify(array1.sort()) === JSON.stringify(array2.sort());

export default compareTwoArrays;
