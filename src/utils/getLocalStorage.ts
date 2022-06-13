/**
 * @description
 * Retorna o valor setado no localStorage.
 * Exemplo de uso:
 * getLocalStorage('token');
 * @param {String} key
 * @return {String} eyJhbGciOiJIUzI1NiIsInR
 */

const getLocalStorage = (key = ''): string => {
  const value = localStorage.getItem(key) || '';
  return value || '';
};

export default getLocalStorage;
