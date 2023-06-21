import PropTypes from 'prop-types';
import {
  ContactsList,
  ConctactListItem,
  DeleteButton,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';


const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filtered = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = (() => {
    const normalizedFilter = filtered.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  })();



  return (
    <>
      <ContactsList>
        {filteredContacts.map(contact => (
          <ConctactListItem key={contact.id}>
            {contact.name}: {contact.number}
            <DeleteButton
              type="button"
              onClick={() => {
                dispatch(deleteContact(contact.id));
              }}
            >
              Delete
            </DeleteButton>
          </ConctactListItem>
        ))}
      </ContactsList>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func,
};

export default ContactList;
