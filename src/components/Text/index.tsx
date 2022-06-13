import React from 'react';
import classNames from 'classnames';
import './styles.scss';

// Google fonts:
// Thin            100
// Extra Light     200
// Light           300
// Regular         400
// Medium          500
// Semi-Bold       600
// Bold            700
// Extra-Bold      800
// Black           900
interface IText {
  children: React.ReactNode | React.ReactNode[];
  as:
    | 'p'
    | 'small'
    | 'b'
    | 'i'
    | 'label'
    | 'em'
    | 'mark'
    | 'del'
    | 'ins'
    | 'sub'
    | 'sup'
    | 'span'
    | 'strong'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6';
  size?: string;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  color?: string;
  className?: string;
  ariaLabel?: string;
  role?: string;
  title?: string;
}

const Text: React.FunctionComponent<IText> = ({
  children,
  as,
  size,
  weight,
  color,
  className = '',
  ariaLabel,
  role,
  title,
}): React.ReactElement => {
  const styles = {
    fontSize: size,
    fontWeight: weight,
    color,
  };

  const textElement = React.createElement(
    as,
    {
      style: styles,
      className: classNames('textElement', className),
      'aria-label': ariaLabel,
      title,
      role,
    },
    children
  );
  return textElement;
};

Text.defaultProps = {
  size: '',
  weight: 400,
  color: '',
  className: '',
  ariaLabel: '',
  role: '',
  title: '',
};

export default Text;
