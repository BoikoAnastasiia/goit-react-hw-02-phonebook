import React, { Component } from 'react';
import Container from './Components/Container';
import PhoneBookForm from './Components/PhoneBookForm';
import ContactsList from './Components/ContactsList';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

class App extends Component {
  state = {
    filter: '',
    contacts: [],
  };

  gatheredData = data => this.setState({ contacts: data });

  addContact = name => {
    const contact = { name, id: uuidv4() };

    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  deleteContact = nameId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(name => name.id !== nameId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredTodos = () => {
    const { filter, contacts } = this.state;
    const normilizeFilter = filter.toLowerCase();

    return contacts.filter(todo =>
      todo.text.toLowerCase().includes(normilizeFilter),
    );
  };

  render() {
    console.log(this.state.contacts);
    return (
      <Container>
        <PhoneBookForm onSubmit={this.gatheredData} />
        <ContactsList contacts={this.state.contacts} />
      </Container>
    );
  }
}

export default App;
