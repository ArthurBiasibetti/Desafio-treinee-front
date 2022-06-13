import React from 'react';
import ReactQuill from 'react-quill';
import { Form } from 'react-bootstrap';
import classNames from 'classnames';
import './styles.scss';

interface IEditor {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  id: string;
  cy: string;
  isInvalid?: boolean;
  msg?: string;
  label?: string;
}

const Editor = ({ id, placeholder, value, onChange, cy, isInvalid, label, msg }: IEditor): React.ReactElement => (
  <Form.Group controlId={id}>
    <Form.Label>{label}</Form.Label>
    <ReactQuill placeholder={placeholder} id={id} data-cy={cy} theme="snow" value={value} onChange={onChange} />
    <Form.Label className={classNames(isInvalid && 'ql-editor__label-error')}>{isInvalid ? msg : ''}</Form.Label>
  </Form.Group>
);

Editor.defaultValue = { isInvalid: false, msg: '', label: '' };

export default Editor;
