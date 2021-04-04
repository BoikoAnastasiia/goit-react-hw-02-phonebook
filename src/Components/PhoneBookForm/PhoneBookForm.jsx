import { Component } from 'react';
import styles from './PhoneBook.module.css';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

class PhoneBookForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.contacts);
    this.reset();
  };

  addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    console.log('form contacts', this.state.contacts);
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label}> Name </label>
        <input
          onChange={this.handleChange}
          value={this.state.name}
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <label className={styles.label}> Phone number </label>

        <input
          type="tel"
          onChange={this.handleChange}
          className={styles.input}
          name="number"
          // pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
        />
        <button
          type="submit"
          onSubmit={this.addContact}
          className={styles.button}
        >
          Add
        </button>
      </form>
    );
  }
}
export default PhoneBookForm;
