import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import './ContactForm.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    const contact = {
      id: uuid(),
      name: name,
      number: number,
    };
    this.props.handlerSubmit(contact);

    this.reset();
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label>
          Name
          <input name="name" value={name} onChange={this.handleChange} />
        </label>
        <label>
          Number
          <input name="number" value={number} onChange={this.handleChange} />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
