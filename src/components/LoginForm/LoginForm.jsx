import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { Navigate } from 'react-router-dom';

import { loginUser } from 'redux/auth/operationsWithUser';
import { useAuth } from 'components/Hooks/useAuth';

import {
  FormInput,
  FormInputLabel,
  SubmitButton,
  ErrMessage,
  FormContact,
} from './LoginForm.styled';

const LoginForm = () => {
  const emailID = nanoid();
  const passwordID = nanoid();
  const dispatch = useDispatch();

  const { isLoggedIn } = useAuth();
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Invalid email address')
      .required('Field is required'),
    password: yup.string().required('Field is required'),
  });

  const handlerFormSubmit = ({ email, password }, actions) => {
    dispatch(loginUser({ email, password }));
    actions.resetForm();
  };
    return (
      <>
        {isLoggedIn && <Navigate to="/phonebook" replace={true} />}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handlerFormSubmit}
        >
          <FormContact autoComplete="on">
            <FormInputLabel htmlFor={emailID}>Email</FormInputLabel>
            <FormInput type="email" name="email" id={emailID} />
            <ErrMessage name="email" component="div" />

            <FormInputLabel htmlFor={passwordID}>Password</FormInputLabel>
            <FormInput
              type="password"
              name="password"
              id={passwordID}
              autoComplete="false"
            />
            <ErrMessage name="password" component="div" />

            <SubmitButton type="submit">Log in</SubmitButton>
          </FormContact>
        </Formik>
      </>
    );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default LoginForm;
