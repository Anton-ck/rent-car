import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import FilterName from 'components/Filter/Filter';
import {
  Phonebook,
  PhonebookTitle,
  PhonebookSubTitle,
} from '../../components/App.styled';
import { fetchContacts } from 'redux/contacts/operations';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts, getError, getIsLoading } from 'redux/contacts/selectors';

const PhoneBook = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Phonebook>
      <PhonebookTitle>PhoneBook</PhonebookTitle>
      <ContactForm />
      <PhonebookSubTitle>Contacts</PhonebookSubTitle>
      {contacts.length === 0 && !error && !isLoading && (
        <b style={{ display: 'flex', justifyContent: 'center', color: 'red' }}>
          You don't have any contact yet
        </b>
      )}
      {contacts.length !== 0 && <FilterName />}

      {isLoading && !error && (
        <b style={{ display: 'flex', justifyContent: 'center' }}>
          Request in progress...
        </b>
      )}
      <ContactList />
      {error && (
        <span
          style={{
            display: 'flex',
            justifyContent: 'center',
            fontStyle: 'italic',
          }}
        >
          Oops, something went wrong. Please try again!
        </span>
      )}
    </Phonebook>
  );
};

export default PhoneBook;
