import { IUser } from '../../interfaces';
import { ISessionInput } from '../../interfaces/ISessionInput';

export interface IAuthContext {
  login: (input: ISessionInput) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
  loggedUser: IUser;
}

export interface IAuthProvider {
  children: React.ReactElement;
}
