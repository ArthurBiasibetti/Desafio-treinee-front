import React, { useState, useContext, useEffect } from 'react';
import { IToggleMenuContext, IToggleMenuProvider } from './interfaces';

const ToggleMenuContext = React.createContext<IToggleMenuContext>({} as IToggleMenuContext);

export function useToggleMenu(): IToggleMenuContext {
  return useContext(ToggleMenuContext);
}

export function ToggleMenuProvider({ children }: IToggleMenuProvider): React.ReactElement {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    function changeWindowSize(): void {
      if (window.innerWidth <= 768) {
        setToggleMenu(true);
      } else {
        setToggleMenu(false);
      }
    }
    changeWindowSize();

    window.addEventListener('resize', changeWindowSize);
    return () => {
      window.removeEventListener('resize', changeWindowSize);
    };
  }, []);

  function updateToggleMenu(): void {
    setToggleMenu(!toggleMenu);
  }

  const value = {
    toggleMenu,
    setToggleMenu,
    updateToggleMenu,
  };

  return <ToggleMenuContext.Provider value={value}>{children}</ToggleMenuContext.Provider>;
}
