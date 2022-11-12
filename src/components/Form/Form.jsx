import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import shortid from 'shortid';

import Phonebook from './Phonebook';
import Contacts from './Contacts';
import CurrentContact from './CurrentContact';
import Filter from './Filter';
import { PhonebookTitle, ContactsTitle } from './Form.styled';

export class Form extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  nameId = shortid.generate();
  telId = shortid.generate();

  handleChange = e => {
    const { name, value, id } = e.target;

    e.target.name === 'name' && this.setState({ id, [name]: value });
    e.target.name === 'number' && this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({
      filter: '',
      name: '',
      number: '',
      id: '',
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { id, name, number, contacts } = this.state;
    const newContact = { id, name, number };
    const errorArray = contacts.filter(contact => contact.name === name);

    errorArray.length === 0
      ? this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }))
      : toast.info('This contact is already in your Phonebook!');

    this.reset();
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = deleteId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== deleteId),
    }));
  };

  render() {
    const { id, name, number, filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <>
        <PhonebookTitle>Phonebook</PhonebookTitle>

        <Phonebook
          handleSubmit={this.handleSubmit}
          nameId={this.nameId}
          name={name}
          handleChange={this.handleChange}
          telId={this.telId}
          number={number}
        />

        <CurrentContact name={name} id={id} number={number} />

        <ContactsTitle>Contacts</ContactsTitle>
        <Filter value={filter} onChange={this.changeFilter} />
        <Contacts
          filteredContacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
        <ToastContainer
          autoClose={3000}
          position="top-center"
          theme="colored"
        />
      </>
    );
  }
}
