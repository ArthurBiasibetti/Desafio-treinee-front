/**
 * @description
 * Retorna o valor formatado para o input.
 * Exemplo de uso:
 * formatMaskMoneyInputChange(e.target.value);
 * @param {String} input
 * @param {Boolean} isBTC
 * @param {String} percent
 * @return {String} 25.000,00 ou 25000,00
 */

const formatMaskMoneyInputChange = (input: string, isBTC = false, percent = ''): string => {
  if (!input) return '';

  if (!isBTC && !percent) {
    let newValue = input.replace(/\D/g, '');

    newValue = `${(Number(newValue) / 100).toFixed(2)}`;
    newValue = newValue.replace('.', ',');
    newValue = newValue.replace(/(\d)(\d{3})(\d{3}),/g, '$1.$2.$3,');
    newValue = newValue.replace(/(\d)(\d{3}),/g, '$1.$2,');
    return newValue;
  }

  if (percent !== '') {
    let newInput = input;
    const matchInput = newInput.match(/,/g);

    if (matchInput && matchInput.length > 1) {
      newInput =
        newInput.substring(0, newInput.indexOf(',') + 1) +
        newInput.substring(newInput.indexOf(',') + 1).replace(/,/g, '');
    }

    return newInput
      .replace(/(,[0-9]{2})([0-9,]*)+/g, '$1')
      .replace(/([^0-9-,])+/g, '')
      .replace(/^(\d{3})([0-9]*)+/g, '$1');
  }

  let newInput = input;
  const matchInput = newInput.match(/,/g);

  if (matchInput && matchInput.length > 1) {
    newInput =
      newInput.substring(0, newInput.indexOf(',') + 1) +
      newInput.substring(newInput.indexOf(',') + 1).replace(/,/g, '');
  }

  return newInput
    .replace(/(,[0-9]{8})([0-9,]*)+/g, '$1')
    .replace(/([^0-9-,])+/g, '')
    .replace(/^(\d{6})([0-9]*)+/g, '$1');
};

export default formatMaskMoneyInputChange;
