import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { IWarningModal } from './interface';

const WarningModal: React.FC<IWarningModal> = ({ show, title, message, children }) => (
  <Modal show={show}>
    <Modal.Header>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{message}</Modal.Body>
    <Modal.Footer>{children}</Modal.Footer>
  </Modal>
);

export default WarningModal;
