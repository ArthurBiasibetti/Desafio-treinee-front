import HttpClient from './httpClient';
import { IUser } from '../interfaces';

class UsersService {
  static async users(): Promise<IUser[]> {
    const { data } = await HttpClient.api.get<IUser[]>('/users');
    return data;
  }

  static async user(id: string): Promise<IUser> {
    const { data } = await HttpClient.api.get(`/users/${id}`);
    return data;
  }

  static async create(input: {
    name: string;
    birthday: string;
    cpf: string;
    permission: 'ADMIN' | 'COLAB';
    comments?: string;
    password: string;
  }): Promise<void> {
    const { data } = await HttpClient.api.post('/users', input);
    return data;
  }

  static async update(updateInput: { comments?: string; permission?: 'ADMIN' | 'COLAB' }, id: string): Promise<void> {
    const { data } = await HttpClient.api.put(`/users/${id}`, updateInput);
    return data;
  }

  static async delete(id: string): Promise<string> {
    const { statusText } = await HttpClient.api.delete(`/users/${id}`);
    return statusText;
  }
}

export default UsersService;
