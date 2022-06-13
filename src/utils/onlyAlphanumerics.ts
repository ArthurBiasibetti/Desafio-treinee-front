/**
 * @description
 * Retorna apenas alfanuméricos
 * Exemplo de uso:
 * onlyAlphaNumerics(name@2021);
 * @param {String} input
 * @param {Boolean} noSpace remove espaços em branco.
 * @return {String} name2021
 */

const onlyAlphaNumerics = (value: string, noSpace = false): string => {
  if (!value) return '';

  if (noSpace) return value.replace(/[^a-z A-Z 0-9]+/g, '').trim();

  return value.replace(/[^a-z A-Z 0-9]+/g, '');
};

export default onlyAlphaNumerics;
