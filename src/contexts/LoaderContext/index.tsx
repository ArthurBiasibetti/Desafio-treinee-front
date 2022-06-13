import React, { useState, useContext } from 'react';
import { ILoaderContext, ILoaderProvider } from './interfaces';
import Loader from '../../components/Loader';

const LoaderContext = React.createContext<ILoaderContext>({} as ILoaderContext);

export function useLoader(): ILoaderContext {
  return useContext(LoaderContext);
}

export function LoaderProvider({ children }: ILoaderProvider): React.ReactElement {
  const [showLoader, setShowLoader] = useState(false);

  function renderLoader(action: string): void {
    switch (action) {
      case 'show':
        setShowLoader(true);
        break;
      case 'hide':
        setShowLoader(false);
        break;
      default:
        setShowLoader(false);
        break;
    }
  }

  const value = {
    showLoader,
    setShowLoader,
    renderLoader,
  };

  return (
    <LoaderContext.Provider value={value}>
      {children} {showLoader && <Loader />}
    </LoaderContext.Provider>
  );
}
