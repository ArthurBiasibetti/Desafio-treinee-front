import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Section from '../../components/Section';
import Text from '../../components/Text';

const Home: React.FunctionComponent = () => (
  <Section className="home" title="Página inicial" description="Página inicial">
    <Row>
      <Col md={12}>
        <Text as="h1" size="2rem" weight={700}>
          Página inicial
        </Text>
        <Text as="small" size=".85rem" weight={400}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        </Text>
      </Col>
    </Row>
  </Section>
);

export default Home;
