import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import FilterName from './Filter/Filter';
import { Phonebook, PhonebookTitle, PhonebookSubTitle } from './App.styled';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getError, getIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  console.log(contacts.length);

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
        <span style={{ display: 'flex', justifyContent: 'center', fontStyle: "italic" }}>
          Oops, something went wrong. Please try again!
        </span>
      )}
    </Phonebook>
  );
};
