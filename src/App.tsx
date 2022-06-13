import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ToggleMenuProvider } from './contexts/ToggleMenuContext';
import Routes from './routes';

const App: React.FunctionComponent = () => (
  <Router>
    <AuthProvider>
      <ToggleMenuProvider>
        <Routes />
      </ToggleMenuProvider>
    </AuthProvider>
  </Router>
);

export default App;
