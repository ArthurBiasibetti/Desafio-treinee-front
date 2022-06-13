/**
 * @description
 * Verificar se o valor de entrada é um número
 * Exemplo de uso:
 * checkIsNumeric('boo12');
 * @param {Any} value
 * @return {Boolean} false
 */

const checkIsNumeric = (value: unknown): boolean => /^-?\d+$/.test(String(value));

export default checkIsNumeric;
