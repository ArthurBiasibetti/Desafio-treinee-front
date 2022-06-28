import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Section from '../../../components/Section';
import Text from '../../../components/Text';
import { IUser } from '../../../interfaces';
import UsersService from '../../../services/users.service';
import toastMsg, { ToastType } from '../../../utils/toastMsg';
import Button from '../../../components/Button';
import { useAuth } from '../../../contexts/AuthContext';
import WarningModal from '../../../components/WarningModal';
import WorkerCard from '../../../components/WorkerCard';
import './styles.scss';

const Users: React.FunctionComponent = (): React.ReactElement => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');
  const { logout, loggedUser } = useAuth();

  const navigate = useNavigate();

  const fetchUsers = async (): Promise<void> => {
    try {
      const data = await UsersService.users();
      setUsers(data);
    } catch (error) {
      toastMsg(ToastType.Error, (error as Error).message);
    }
  };

  const deleteUser = async (id: string): Promise<void> => {
    try {
      const res = await UsersService.delete(id);
      toastMsg(ToastType.Success, res);
      fetchUsers();
    } catch (error) {
      toastMsg(ToastType.Error, (error as Error).message);
    }
  };

  useEffect(() => {
    let isCleaningUp = false;

    if (!isCleaningUp) {
      fetchUsers();
    }
    return () => {
      isCleaningUp = true;
    };
  }, []);

  return (
    <Section className="users" title="Listagem de funcionários" description="Listagem de funcionários">
      <Row>
        <Col md={12}>
          <Text as="h1" size="2rem" weight={700}>
            Funcionários
          </Text>
        </Col>
      </Row>
      <Row>
        {loggedUser.permission === 'ADMIN' && (
          <Col md={6} className="mt-3 mb-2">
            <Button type="button" variant="primary" onClick={() => navigate('/funcionarios/acao')} cy="test-create">
              Cadastrar funcionário
            </Button>
          </Col>
        )}
        <Col md={6} className="mt-3 mb-2">
          <Button type="button" variant="primary" onClick={() => logout()} cy="test-logout">
            log out
          </Button>
        </Col>
        <Col md={12}>
          {users.map((user, index) => (
            <div key={user.id} className="card__wrapper">
              <WorkerCard
                startOpen={index === 0}
                hasActions={loggedUser.permission === 'ADMIN'}
                deleteAction={(id) => {
                  setShowDeleteModal(true);
                  setSelectedUser(id);
                }}
                editAction={(id) => navigate(`/funcionarios/acao/${id}`)}
                user={user}
              />
            </div>
          ))}
        </Col>
      </Row>

      <WarningModal
        show={showDeleteModal}
        title="Confirmar Remoção de funcionário"
        message="Esse funcionário será deletado permanentemente, confirmar remoção?"
      >
        <Button
          type="button"
          variant="primary"
          onClick={async () => {
            await deleteUser(selectedUser);
            setShowDeleteModal(false);
          }}
          cy="test-create"
        >
          Confirmar!
        </Button>
        <Button type="button" variant="dark" onClick={() => setShowDeleteModal(false)} cy="test-create">
          Cancelar
        </Button>
      </WarningModal>
    </Section>
  );
};

export default Users;
