import React, { Component } from 'react';
import Container from './Components/Container';
import PhoneBookForm from './Components/PhoneBookForm';
import ContactsList from './Components/ContactsList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    console.log(this.state.contacts);
    return (
      <Container>
        <PhoneBookForm />
        {/* <ContactsList contacts={this.state.contacts} /> */}
      </Container>
    );
  }
}

export default App;
