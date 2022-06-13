import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import { FcBusinessman } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

import { ILogin } from './interface';
import Text from '../../components/Text';
import { useAuth } from '../../contexts/AuthContext';

import './styles.scss';
import Input from '../../components/Input';
import MyButton from '../../components/Button';
import toastMsg, { ToastType } from '../../utils/toastMsg';

const loginSchema = yup.object().shape({
  username: yup.string().required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
});

const defaultValue = {
  username: '',
  password: '',
} as ILogin;

const Login: React.FC = () => {
  const [initialValues] = useState(defaultValue as ILogin);
  const [isLoading, setIsLoading] = useState(false);
  const { login, isAuthenticated } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/funcionarios');
    }
  }, [navigate, isAuthenticated]);

  const handleSubmit = async (values: ILogin): Promise<void> => {
    if (values) {
      try {
        setIsLoading(true);
        const isLoged = await login(values);
        if (isLoged) {
          setIsLoading(false);
          navigate('/funcionarios');
        }
      } catch (err) {
        setIsLoading(false);
        toastMsg(ToastType.Error, `${(err as AxiosError).response?.data.message}!` || 'Internal Server Error!');
      }
    }
  };

  return (
    <div id="login">
      <div className="contentLeft">
        <Text as="span" color="white" className="contentLeft__brandTitle">
          Coworkes
          <FcBusinessman />
        </Text>
      </div>
      <div className="contentRight">
        <div className="contentRight__logoWrapper">
          <FcBusinessman size="4em" />
        </div>
        <Text as="h1">login</Text>
        <Formik
          initialValues={initialValues}
          enableReinitialize
          validationSchema={loginSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="form">
              <Input
                cy="test-email"
                id="email"
                name="username"
                label="Username"
                as="input"
                placeholder="Digite seu nome ou cpf"
                msg={errors.username}
                isInvalid={!!(errors.username && touched.username)}
              />
              <Input
                cy="test-password"
                id="password"
                name="password"
                label="Password"
                as="input"
                placeholder="Digite sua senha"
                type="password"
                msg={errors.password}
                isInvalid={!!(errors.password && touched.password)}
              />

              <div className="button__wrapper">
                <MyButton
                  disabled={
                    !!(errors.username && touched.username) || !!(errors.password && touched.password) || isLoading
                  }
                  cy="test-submit"
                  type="submit"
                >
                  Log in
                </MyButton>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
