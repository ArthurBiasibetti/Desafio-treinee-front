import jwtDecode, { JwtPayload } from 'jwt-decode';

/**
 * @description
 * Retorna se o token jwt é válido ou não.
 * Exemplo de uso:
 * checkTokenIsValid('token');
 * @param {String} key
 * @return {Boolean} true or false
 */

const checkTokenIsValid = (key = ''): boolean => {
  try {
    const token = localStorage.getItem(key);

    if (token && jwtDecode<JwtPayload>(token)) return true;

    return false;
  } catch {
    return false;
  }
};

export default checkTokenIsValid;
