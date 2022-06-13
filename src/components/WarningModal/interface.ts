import React from 'react';

export interface IWarningModal {
  show: boolean;
  title?: string;
  message?: string;
  children?: React.ReactElement | React.ReactElement[];
}
