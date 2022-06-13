export interface IEditor {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  id: string;
  cy: string;
  disabled?: boolean | false;
  isInvalid?: boolean | false;
  msg?: string;
  label?: string;
  title?: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
