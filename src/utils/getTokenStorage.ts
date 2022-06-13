/**
 * @description
 * Retorna o token setado no localStorage.
 * @return {String} Bearer eyJhbGciOiJIUzI1NiIsInR
 */

const getTokenStorage = (): string => {
  const token = localStorage.getItem('TOKEN_KEY');
  return token ? `Bearer ${token}` : '';
};

export default getTokenStorage;
