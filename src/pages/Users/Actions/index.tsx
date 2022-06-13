import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { Row, Col } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { isValidCPF } from '@brazilian-utils/brazilian-utils';
import Section from '../../../components/Section';
import Text from '../../../components/Text';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import UsersService from '../../../services/users.service';
import toastMsg, { ToastType } from '../../../utils/toastMsg';

import './styles.scss';
import CpfInput from '../../../components/CpfInput';

const createSchema = yup.object().shape({
  name: yup.string().max(120, 'Máximo 120 caracteres').required('Campo obrigatório'),
  birthday: yup.date().required('Campo obrigatório'),
  cpf: yup
    .string()
    .test('isCpf', 'cpf invalido', (value) => isValidCPF(value || ''))
    .required('Campo obrigatório'),
  comments: yup.string().max(500, 'Máximo 500 caracteres'),
  permission: yup.string().oneOf(['ADMIN', 'COLAB']).required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
});

interface ICreate {
  name: string;
  birthday: string;
  cpf: string;
  comments?: string;
  permission: 'ADMIN' | 'COLAB';
  password: string;
}

const defaultValue = {
  name: '',
  birthday: '',
  cpf: '',
  comments: '',
  permission: 'ADMIN',
  password: '',
} as ICreate;

const Create: React.FunctionComponent = (): React.ReactElement => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loader, setLoader] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState(defaultValue as ICreate);

  const handleSubmit = async (values: ICreate): Promise<void> => {
    try {
      setLoader(true);
      const { name, birthday, cpf, permission, comments, password } = values;

      if (id) {
        await UsersService.update({ permission, comments }, id);
        toastMsg(ToastType.Success, 'Atualização realizada com sucesso!');
      } else {
        await UsersService.create({ name, birthday, cpf, permission, comments, password });
        toastMsg(ToastType.Success, 'Cadastro realizado com sucesso!');
      }

      setLoader(false);
      navigate('/funcionarios');
    } catch (error) {
      setLoader(false);
      toastMsg(ToastType.Error, (error as Error).message);
    }
  };

  useEffect(() => {
    let isCleaningUp = false;

    async function getUserById(): Promise<void> {
      try {
        if (!isCleaningUp && id) {
          const res = await UsersService.user(id);
          if (res) {
            const obj = {
              name: res.name,
              birthday: res.birthday,
              comments: res.comments,
              cpf: res.cpf,
              permission: res.permission,
              password: res.password,
            } as ICreate;

            setInitialValues(obj);
          }
        }
      } catch (error) {
        toastMsg(ToastType.Error, (error as Error).message);
      }
    }

    getUserById();

    return () => {
      isCleaningUp = true;
    };
  }, [id]);

  return (
    <Section
      className="create"
      title={`${id ? 'Editar' : 'Criar  '} funcionário`}
      description={`${id ? 'Editar' : 'Criar'} funcionário`}
    >
      <Row className="mb-5">
        <Col md={12}>
          <Text as="h1" size="2rem" weight={700}>
            {id ? 'Editar' : 'Criar'} funcionário
          </Text>
          <Text as="small" size=".85rem" weight={400}>
            Os campos abaixo já contém validações configuradas para exemplo
          </Text>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <Formik
            initialValues={initialValues}
            validationSchema={createSchema}
            enableReinitialize
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {({ errors, touched }) => (
              <Form autoComplete="off">
                <Row>
                  <Col md={12} className="mb-3">
                    <Input
                      cy="test-inputName"
                      isInvalid={(errors.name && touched.name) || false}
                      msg={errors.name}
                      label="Nome do funcionário"
                      id="name"
                      name="name"
                      as="input"
                      placeholder="Insira um nome do funcionário"
                      disabled={!!id}
                      className={`${id && 'disabled'}`}
                    />
                  </Col>
                  <Col md={12} className="mb-3">
                    <Input
                      cy="test-inputBirthday"
                      isInvalid={(errors.birthday && touched.birthday) || false}
                      msg={errors.birthday}
                      label="Data de Nascimento"
                      id="birthday"
                      name="birthday"
                      as="input"
                      placeholder="Insira a data de nascimento do funcionário"
                      type="date"
                      disabled={!!id}
                      className={`${id && 'disabled'}`}
                    />
                  </Col>
                  <Col md={12} className="mb-3">
                    <CpfInput
                      cy="test-inputCpf"
                      isInvalid={(errors.cpf && touched.cpf) || false}
                      msg={errors.cpf}
                      label="CPF"
                      id="cpf"
                      name="cpf"
                      as="input"
                      placeholder="Insira o CPF do funcionário"
                      disabled={!!id}
                      className={`${id && 'disabled'}`}
                    />
                  </Col>
                  <Col md={12} className="mb-3">
                    <Input
                      cy="test-inputComments"
                      isInvalid={(errors.comments && touched.comments) || false}
                      msg={errors.comments}
                      label="Observações"
                      id="comments"
                      name="comments"
                      as="textarea"
                      placeholder="Insira as observações sobre o funcionário"
                    />
                  </Col>
                  <Col md={12} className="mb-3">
                    <Input
                      cy="test-inputPermission"
                      isInvalid={(errors.permission && touched.permission) || false}
                      msg={errors.permission}
                      label="Permissões"
                      id="permission"
                      name="permission"
                      as="select"
                      type="select"
                    >
                      <option value="ADMIN">Administrador</option>
                      <option value="COLAB"> Colaborador </option>
                    </Input>
                  </Col>
                  <Col md={12} className="mb-3">
                    <Input
                      cy="test-inputPassword"
                      isInvalid={(errors.comments && touched.comments) || false}
                      msg={errors.comments}
                      label="Senha"
                      id="password"
                      name="password"
                      as="input"
                      type="password"
                      placeholder="Digite a senha do funcionário"
                      disabled={!!id}
                      className={`${id && 'disabled'}`}
                    />
                  </Col>
                  <Col md={12} className="mt-3">
                    <Button type="submit" disabled={loader} variant="primary" cy="test-create">
                      {id ? 'Editar informações do funcionário' : 'Cadastrar novo funcionário'}
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Section>
  );
};

export default Create;
