import { IUser } from '../../interfaces';

export interface IWorkerCard {
  user: IUser;
  startOpen?: boolean;
  editAction: (id: string) => void;
  deleteAction: (id: string) => void;
  hasActions?: boolean;
}

export interface IWorkerCardBody {
  user: IUser;
  deleteAction: (id: string) => void;
  hasActions?: boolean;
}
