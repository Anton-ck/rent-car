import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';

import { signupUser } from 'redux/auth/operationsWithUser';

import {
  FormInput,
  FormInputLabel,
  SubmitButton,
  ErrMessage,
  FormContact,
} from './RegisterForm.styled';
const RegisterForm = () => {
  const nameID = nanoid();
  const emailID = nanoid();
  const passwordID = nanoid();
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(
        "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
      .required('Required'),
    email: yup.string().email('Invalid email address').required('Required'),
    password: yup
      .string()
      .min(7, 'Must be at least 7 characters')
      .required('Field is required'),
  });

  const handlerFormSubmit = ({ name, email, password }, actions) => {
    // const nameNormalized = name.toLowerCase();

    // const isNameAlreadyInContacts = contacts.find(
    //   contact => contact.name.toLowerCase() === nameNormalized
    // );

    // if (isNameAlreadyInContacts) {
    //   alert(`${name} is already in contacts.`);
    //   return;
    // }
    dispatch(signupUser({ name, email, password }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handlerFormSubmit}
    >
      <FormContact autoComplete="off">
        <FormInputLabel htmlFor={nameID}>Name</FormInputLabel>
        <FormInput type="name" name="name" id={nameID} />
        <ErrMessage name="name" component="div" />

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

        <SubmitButton type="submit">Register</SubmitButton>
      </FormContact>
    </Formik>
  );
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default RegisterForm;
