import { Component } from 'react';
import { nanoid } from 'nanoid';

import Form from '../Form/Form';
import Contacts from '../Contacts/Contacts';
import Filter from '../Filter/Filter';

import s from './App.module.scss';

class App extends Component {
  state = {
    contacts: [
      { id: '111', name: 'Michael Jackson', number: '111-11-11' },
      { id: '222', name: 'Bob Marley', number: '222-22-22' },
      { id: '333', name: 'Tina Turner', number: '333-33-33' },
      { id: '444', name: 'ssv', number: '444-33-33' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    // checking name for matches
    const findName = this.state.contacts.find(
      contact => contact.name === data.name,
    );
    if (findName) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    // add new contact
    const newData = { id: nanoid(5), ...data };
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newData],
      };
    });
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    // for filter
    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <main>
        <h1 className={s.title}>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2 className={s.title}>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <Contacts arr={filteredContacts} onDelContact={this.deleteContact} />
      </main>
    );
  }
}

export default App;
