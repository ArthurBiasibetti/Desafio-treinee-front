import React from 'react';
import { Dict } from 'mixpanel-browser';

export interface IAnalyticsContext {
  trackEvent: (eventName: string, properties: Dict) => void;
  identify: (identifier: string) => void;
  setPeople: (field: string, value: string) => void;
}

export interface IAnalyticsProvider {
  children: React.ReactElement;
}
