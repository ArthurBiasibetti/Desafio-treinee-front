import classNames from 'classnames';
import { useField } from 'formik';
import React from 'react';
import ReactInputMask from 'react-input-mask';
import Text from '../Text';

interface IInput {
  cy: string;
  isInvalid?: boolean;
  msg?: string;
  className?: string;
  label?: string;
  id: string;
  name: string;
  as: string;
  placeholder?: string;
  type?: string;
  children?: React.ReactElement | React.ReactElement[];
  disabled?: boolean;
}

const CpfInput: React.FC<IInput> = ({ className, isInvalid, msg, id, label, ...props }) => {
  const { name } = props;
  const [field] = useField(name);

  return (
    <label htmlFor={id} className="w-100">
      {label}
      <ReactInputMask
        className={classNames(`form-control ${isInvalid ? 'is-invalid' : ''} ${className}`)}
        {...props}
        mask="999.999.999-99"
        {...field}
        {...props}
      />
      {isInvalid ? (
        <Text as="span" color="var(--red-500)" weight={500}>
          {msg}
        </Text>
      ) : null}
    </label>
  );
};

export default CpfInput;
