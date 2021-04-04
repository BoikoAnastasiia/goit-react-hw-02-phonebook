import React, { Component } from 'react';
import Container from './Components/Container';
import PhoneBookForm from './Components/PhoneBookForm';
import ContactsList from './Components/ContactsList';

class App extends Component {
  state = {
    filter: '',
    contacts: [],
  };

  gatheredData = data => this.setState({ contacts: data });

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
    const { contacts } = this.state;
    return (
      <Container>
        <PhoneBookForm
          onSubmit={this.gatheredData}
          onDelete={this.deleteContact}
        />
        <ContactsList contacts={contacts} />
      </Container>
    );
  }
}

export default App;
