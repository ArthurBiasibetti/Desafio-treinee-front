import React from 'react';

export interface IToggleMenuContext {
  toggleMenu: boolean;
  setToggleMenu: (toggleMenu: boolean) => void;
  updateToggleMenu: () => void;
}

export interface IToggleMenuProvider {
  children: React.ReactElement;
}
