import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { useToggleMenu } from '../../contexts/ToggleMenuContext';
import Text from '../Text';
import './styles.scss';

const Header: React.FunctionComponent = () => {
  const { updateToggleMenu } = useToggleMenu();

  return (
    <header className="shadow-sm">
      <nav className="nav">
        <Container fluid>
          <Row>
            <Col md={12}>
              <div className="nav__grid-items d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <div className="nav__toggle">
                    <HiOutlineMenuAlt3
                      size={25}
                      aria-label="Abrir/Fechar"
                      aria-describedby="Abrir/Fechar menu lateral"
                      onClick={() => {
                        updateToggleMenu();
                      }}
                      data-cy="test-toggleMenu"
                    />
                  </div>
                  <div className="nav__title">
                    <Text as="h2" ariaLabel="Portal administrador">
                      Portal administrador
                    </Text>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
