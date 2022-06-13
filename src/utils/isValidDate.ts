import { isValid, parse } from 'date-fns';

/**
 * @description
 * Retorna se a data informada é válida.
 * Exemplo de uso:
 * isValidDate('20/01/2022');
 * @param {String} date
 * @return {Boolean} true
 */

const isValidDate = (date: string): boolean => {
  if (!date) return false;

  const newDate = parse(date, 'dd/MM/yyyy', new Date());

  return isValid(newDate);
};

export default isValidDate;
