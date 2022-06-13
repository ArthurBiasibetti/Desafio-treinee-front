import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../../interfaces';
import { ISessionInput } from '../../interfaces/ISessionInput';
import HttpClient from '../../services/httpClient';
import SessionService from '../../services/session.service';
import UsersService from '../../services/users.service';

import { IAuthContext, IAuthProvider } from './interface';

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function useAuth(): IAuthContext {
  return useContext(AuthContext);
}

export const AuthProvider: React.FC<IAuthProvider> = ({ children }): React.ReactElement => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loggedUser, setLoggedUser] = useState({} as IUser);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('TOKEN_KEY');
    if (token) {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, [navigate]);

  useEffect(() => {
    const userId = localStorage.getItem('USER_ID');
    if (userId) {
      UsersService.user(userId)
        .then((data) => setLoggedUser(data))
        .catch((err) => console.error(err));
    }
  }, []);

  const login = async (loginInput: ISessionInput): Promise<boolean> => {
    setIsLoading(true);
    const loginData = await SessionService.login(loginInput);

    if (loginData.token) {
      localStorage.setItem('USER_ID', loginData.data.id);
      localStorage.setItem('TOKEN_KEY', loginData.token);
      HttpClient.api.defaults.headers.common.Authorization = `Bearer ${loginData.token}`;
      setIsAuthenticated(true);
      setLoggedUser(loginData.data);
    }

    setIsLoading(false);
    return Boolean(loginData.token);
  };

  const logout = (): void => {
    localStorage.removeItem('TOKEN_KEY');
    localStorage.removeItem('USER_ID');
    setIsAuthenticated(false);
    setLoggedUser({} as IUser);
    HttpClient.api.defaults.headers.common.Authorization = '';
  };

  const value = {
    login,
    logout,
    isLoading,
    isAuthenticated,
    loggedUser,
  };

  return <AuthContext.Provider value={value}> {children} </AuthContext.Provider>;
};
