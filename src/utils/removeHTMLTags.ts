/**
 * @description
 * Remove tags html de uma string.
 * Exemplo de uso:
 * removeHTMLTags('<p>teste</p>');
 * @param {String} value
 * @return {string} teste
 */

const removeHTMLTags = (value: string): string => {
  if (!value) return '';

  const regex = /(<([^>]+)>)/gi;

  return value.replace(regex, '');
};

export default removeHTMLTags;
