import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { HiUser, HiHome } from 'react-icons/hi';
import Text from '../Text';
import { useToggleMenu } from '../../contexts/ToggleMenuContext';
import { ReactComponent as Logo } from '../../statics/logo/logo.svg';
import './styles.scss';

const Sidebar: React.FunctionComponent = () => {
  const { toggleMenu } = useToggleMenu();

  return (
    <Navbar className={`sidebar align-items-start flex-column w-100 ${toggleMenu && 'min-width'}`}>
      <div className="sidebar__brand mx-auto">
        <Logo />
      </div>
      <div className="sidebar__routes w-100">
        <ul className="sidebar__routes--ul d-flex flex-wrap flex-column">
          <li className="d-flex align-items-center">
            <NavLink
              to="/"
              className={(navData) => `sidebar__routes--link w-100 ${navData.isActive ?? 'sidebar__routes--active'}`}
            >
              <HiHome size={22} />{' '}
              <Text as="span" className="sidebar__routes--title">
                Home
              </Text>
            </NavLink>
          </li>
          <li className="d-flex align-items-center">
            <NavLink
              to="/funcionarios"
              className={(navData) => `sidebar__routes--link w-100 ${navData.isActive ?? 'sidebar__routes--active'}`}
            >
              <HiUser size={22} />{' '}
              <Text as="span" className="sidebar__routes--title">
                Gerenciar funcionários
              </Text>
            </NavLink>
          </li>
        </ul>
      </div>
    </Navbar>
  );
};

export default Sidebar;
