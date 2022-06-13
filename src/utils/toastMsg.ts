import React from 'react';
import { toast } from 'react-toastify';

export enum ToastType {
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Error = 'error',
}

/**
 * @description
 * Retorna o toast desejado.
 * Tipos: success, info, warning, error.
 * Exemplo de uso:
 * toastMsg('success', 'Produto adicionado com sucesso!');
 * @param {ToastType} type
 * @param {String} text
 */

const toastMsg = (type: ToastType, text: string): React.ReactText => {
  if (!text) return '';

  switch (type) {
    case ToastType.Success:
      return toast.success(text);
    case ToastType.Warning:
      return toast.warn(text);
    case ToastType.Error:
      return toast.error(text);
    case ToastType.Info:
    default:
      return toast.info(text);
  }
};

export default toastMsg;
