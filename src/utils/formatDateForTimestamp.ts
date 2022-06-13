/**
 * @description
 * Retorna uma data formatada em timestamp.
 * Exemplo de uso:
 * formatDate('17/03/2022');
 * @param {String} value
 * @return {Number} 1615950000000
 */

const formatDateForTimestamp = (value: string): number => {
  const date = value.replace(/(\d+[/])(\d+[/])/, '$2$1');
  const dateTimestamp = new Date(date).getTime();

  return dateTimestamp;
};

export default formatDateForTimestamp;
