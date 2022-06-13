import React, { useEffect, useContext } from 'react';
import mixpanel, { Dict } from 'mixpanel-browser';
import { IAnalyticsContext, IAnalyticsProvider } from './interfaces';

const AnalyticsContext = React.createContext<IAnalyticsContext>({} as IAnalyticsContext);

export function useAnalytics(): IAnalyticsContext {
  return useContext(AnalyticsContext);
}

export function AnalyticsProvider({ children }: IAnalyticsProvider): React.ReactElement {
  function trackEvent(eventName: string, properties: Dict): void {
    mixpanel.track(eventName, properties);
  }
  function identify(identifier: string): void {
    mixpanel.identify(identifier);
  }
  function setPeople(field: string, value: string): void {
    mixpanel.people.set(field, value);
  }

  useEffect(() => {
    if (process.env.REACT_APP_MIXPANEL_TOKEN) {
      mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN);
    }
  }, []);

  const value = {
    identify,
    setPeople,
    trackEvent,
  };

  return <AnalyticsContext.Provider value={value}>{children}</AnalyticsContext.Provider>;
}
