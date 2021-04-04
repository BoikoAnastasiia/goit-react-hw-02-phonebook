import React, { Component } from 'react';
import Container from './Components/Container';
import PhoneBookForm from './Components/PhoneBookForm';
import ContactsList from './Components/ContactsList';
import Search from './Components/Search';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

class App extends Component {
  state = {
    filter: '',
    contacts: [],
  };

  gatheredData = data => {
    const newData = data;
    return newData;
  };

  addContact = data => {
    const newContact = data;
    newContact.id = uuidv4();
    return this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  deleteContact = nameId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(name => name.id !== nameId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredNames = () => {
    const { filter, contacts } = this.state;
    const normilizeFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normilizeFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const filteredNames = this.getFilteredNames();

    return (
      <Container>
        <PhoneBookForm onSubmit={this.addContact} onAdd={this.addContact} />
        <Search value={filter} onChange={this.changeFilter} />
        <ContactsList contacts={filteredNames} onDelete={this.deleteContact} />
      </Container>
    );
  }
}

export default App;
