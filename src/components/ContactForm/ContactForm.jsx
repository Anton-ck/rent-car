import PropTypes from 'prop-types';
import {
  FormInput,
  FormInputLabel,
  SubmitButton,
  ErrMessage,
  FormContact,
} from './ContactForm.styled';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';

const ContactForm = () => {
  const nameID = nanoid();
  const numberID = nanoid();
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(
        "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
      .required(),
    number: yup
      .string()
      .matches(
        '^[+]?[(]?[0-9]{1,4}[)]?[-s.]?[0-9]{1,4}[-s.]?[0-9]{1,6}$',
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required(),
  });

  const handlerFormSubmit = ({ name, number }, actions) => {
    const nameNormalized = name.toLowerCase();

    const isNameAlreadyInContacts = contacts.find(
      contact => contact.name.toLowerCase() === nameNormalized
    );

    if (isNameAlreadyInContacts) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({name, number}));
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
        <FormInput type="text" name="name" id={nameID} />
        <ErrMessage name="name" component="div" />

        <FormInputLabel htmlFor={numberID}>Number</FormInputLabel>
        <FormInput type="text" name="number" id={numberID} />
        <ErrMessage name="number" component="div" />

        <SubmitButton type="submit">Add contact</SubmitButton>
      </FormContact>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
