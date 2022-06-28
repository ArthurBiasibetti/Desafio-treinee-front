import React from 'react';
import { Accordion, AccordionProps } from 'react-bootstrap';
import './styles.scss';

interface IAccordion extends AccordionProps {
  header: string | React.ReactElement;
  body: React.ReactElement;
  defaultActive?: string;
  active?: string;
  className?: string;
}

const DataAccordion = ({
  header,
  body,
  defaultActive = '0',
  active = '0',
  className,
}: IAccordion): React.ReactElement => (
  <Accordion className="dataAccordion" defaultActiveKey={defaultActive}>
    <Accordion.Item eventKey={active}>
      <Accordion.Header>{header}</Accordion.Header>
      <Accordion.Body className={className}>{body}</Accordion.Body>
    </Accordion.Item>
  </Accordion>
);

export default DataAccordion;
