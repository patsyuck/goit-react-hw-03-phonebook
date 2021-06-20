import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import { ContactForm } from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = property => event => {
    this.setState({ [property]: event.target.value });
  };

  handlerSubmit = contact => {
    if (
      this.state.contacts.some(
        item => item.name.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      alert(`${contact.name} is already in contacts!`);
    } else {
      this.setState({
        contacts: this.state.contacts.concat([contact]),
      });
    }
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handlerSubmit={this.handlerSubmit} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.handleChange} />
        <ContactList
          friends={this.state.contacts}
          filter={this.state.filter}
          onClick={this.handleDelete}
        />
      </div>
    );
  }
}
