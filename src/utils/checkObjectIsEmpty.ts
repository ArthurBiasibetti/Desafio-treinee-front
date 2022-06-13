/**
 * @description
 * Retorna se um objeto está vazio ou não.
 * Exemplo de uso:
 * checkObjectIsEmpty({});
 * @param {Object} obj
 * @return {Boolean} true or false
 */

const checkObjectIsEmpty = (obj: unknown): boolean => JSON.stringify(obj) === '{}';

export default checkObjectIsEmpty;
