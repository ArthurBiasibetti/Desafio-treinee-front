import React from 'react';
import { Badge } from 'react-bootstrap';
import './styles.scss';

interface IBadge {
  type:
    | 'primary-light'
    | 'primary-dark'
    | 'success-dark'
    | 'success-light'
    | 'secondary-light'
    | 'secondary-dark'
    | 'assignment'
    | 'confirmation'
    | 'review'
    | 'increase'
    | 'debasement'
    | 'closure'
    | 'canceled';
  children: React.ReactNode | React.ReactNode[];
}

const Badges = ({ type, children }: IBadge): React.ReactElement => <Badge bg={type}>{children}</Badge>;

export default Badges;
