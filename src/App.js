import React, { Component } from 'react';
import './App.css';
import { ContactForm } from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
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

  componentDidMount() {
    this.setState({
      contacts: JSON.parse(localStorage.getItem('contacts')) || [],
    });
  }

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

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
}
