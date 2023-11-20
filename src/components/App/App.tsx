import React, { Component } from 'react';

import ContactForm, { ContactsInitialValues } from 'components/ContactForm';
import ContactList from 'components/ContactList';

import { Wrapper } from './App.styled';

class App extends Component<{}, AppState> {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmitForm = (values: ContactsInitialValues) => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, values] };
    });
  };

  onContactDelete = (id: string) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    console.log('this.state.contacts: ', this.state.contacts);
    const { contacts } = this.state;

    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={this.onSubmitForm} />

        <h2>Contacts</h2>
        <ContactList contacts={contacts} onContactDelete={this.onContactDelete} />
      </Wrapper>
    );
  }
}

export default App;

export type AppState = {
  contacts: ContactsInitialValues[];
  filter: string;
};
