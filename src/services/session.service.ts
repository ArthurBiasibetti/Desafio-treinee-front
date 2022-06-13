import { IUser } from '../interfaces';
import { ISessionInput } from '../interfaces/ISessionInput';
import HttpClient from './httpClient';

class SessionService {
  static async login(input: ISessionInput): Promise<{ token: string; data: IUser }> {
    const { headers, data } = await HttpClient.api.post('/sessions', input);

    const token = headers.authorization;

    return { token, data };
  }
}

export default SessionService;
