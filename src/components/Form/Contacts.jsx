import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactsList,
  ContactsListItem,
  ContactsListText,
  ContactsButtonDelete,
} from './Form.styled';

const Contacts = ({ filteredContacts, onDeleteContact }) => (
  <ContactsList>
    {filteredContacts.map(({ id, name, number }) => (
      <ContactsListItem key={id}>
        <ContactsListText>
          {name}: {number}
        </ContactsListText>

        <ContactsButtonDelete type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </ContactsButtonDelete>
      </ContactsListItem>
    ))}
  </ContactsList>
);

Contacts.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    )
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contacts;
