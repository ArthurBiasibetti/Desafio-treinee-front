/**
 * @description
 * Remove tudo que não for números
 * Exemplo de uso:
 * onlyNumbers(11.21);
 * @param {String | Number} input
 * @return {String} 1121
 */

const onlyNumbers = (input: string | number): string => String(input).replace(/[^\d]/g, '');

export default onlyNumbers;
