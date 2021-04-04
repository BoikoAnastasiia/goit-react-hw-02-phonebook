import styles from './ContactList.module.css';

const ContactsList = ({ contacts }) => (
  <ul className={styles.container}>
    {contacts.map(({ name, id }) => (
      <li key={id} className={styles.list}>
        {name}
      </li>
    ))}
  </ul>
);
export default ContactsList;
