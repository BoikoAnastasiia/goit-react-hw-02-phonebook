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
