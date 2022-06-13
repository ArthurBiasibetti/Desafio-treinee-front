import React from 'react';

export interface ILoaderContext {
  showLoader: boolean;
  setShowLoader: (showLoader: boolean) => void;
  renderLoader: (action: string) => void;
}

export interface ILoaderProvider {
  children: React.ReactElement;
}
