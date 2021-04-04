import { Component } from 'react';
import styles from './PhoneBook.module.css';

class PhoneBookForm extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(...this.state.contacts);
    this.addContact();
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };
  render() {
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
          className={styles.input}
          name="number"
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
        />
        <button onSubmit={this.handleSubmit} className={styles.button}>
          Add
        </button>
      </form>
    );
  }
}
export default PhoneBookForm;