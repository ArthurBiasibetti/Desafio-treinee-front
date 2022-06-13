export interface IUser {
  id: string;
  name: string;
  birthday: string;
  cpf: string;
  comments: string;
  permission: 'ADMIN' | 'COLAB';
  password: string;
}
