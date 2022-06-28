import React, { useMemo } from 'react';
import { formatCPF } from '@brazilian-utils/brazilian-utils';
import { IoIosTrash } from 'react-icons/io';
import { HiPencilAlt } from 'react-icons/hi';
import Accordion from '../Accordion';

import { IWorkerCard, IWorkerCardBody } from './interface';
import './styles.scss';

const BodyCard: React.FC<IWorkerCardBody> = ({ user, deleteAction }): React.ReactElement => (
  <div className="main__content">
    <div>
      <b>Data de nascimento:</b> {user.birthday}
    </div>
    <div>
      <b>CPF:</b> {formatCPF(user.cpf)}
    </div>
    <div>
      <b>Permissões:</b> {user.permission}
    </div>
    <button type="button" className="delete__button" onClick={() => deleteAction(user.id)}>
      Excluir Trabalhador <IoIosTrash size={22} />
    </button>
  </div>
);

const WorkerCard: React.FC<IWorkerCard> = ({
  user,
  startOpen,
  deleteAction,
  editAction,
  hasActions,
}): React.ReactElement => {
  const header = useMemo(
    () => (
      <div
        className="header__content"
        title={`editar ${user.name}`}
        onClick={() => editAction(user.id)}
        aria-hidden="true"
      >
        {hasActions ? <HiPencilAlt size={16} /> : ''}
        <span>{user.name}</span>
      </div>
    ),
    [user.name, hasActions, editAction, user.id]
  );

  return (
    <Accordion
      defaultActive={startOpen ? user.id : ''}
      active={user.id}
      header={header}
      body={<BodyCard deleteAction={deleteAction} user={user} />}
    />
  );
};

export default WorkerCard;
