/**
 * @description
 * Retorna um valor em real formatado.
 * Exemplo de uso:
 * formatMaskMoney(11.50);
 * @param {String} value
 * @return {String} R$ 11,50
 */

const formatMaskMoney = (value: number): string => {
  if (!value) return '';

  return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
};

export default formatMaskMoney;
