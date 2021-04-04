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

  getFilteredNames = () => {
    const { filter, contacts } = this.state;
    const normilizeFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.text.toLowerCase().includes(normilizeFilter),
    );
  };

  render() {
    const { contacts } = this.state;
    console.log('app  contacts', this.state.contacts);
    return (
      <Container>
        <PhoneBookForm onSubmit={this.gatheredData} />
        <ContactsList contacts={contacts} onDelete={this.deleteContact} />
      </Container>
    );
  }
}

export default App;
