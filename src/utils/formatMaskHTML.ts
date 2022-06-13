/**
 * @description
 * Retorna um valor formatado de acordo com o segundo parâmetro informado.
 * Exemplo de uso:
 * formatMaskHTML('51999999999', '(##) #####-####');
 * @param {String} value
 * @param {String} mask
 * @return {String} (51) 99999-9999
 */

const formatMaskHTML = (value: string, mask: string): string => {
  if (!value || !mask) return '';

  let i = 0;
  const v = value.toString();

  return mask.replace(/#/g, () => v[i++] || '');
};

export default formatMaskHTML;
