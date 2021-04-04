import styles from './ContactList.module.css';

const ContactsList = ({ contacts }) => (
  <ul className={styles.container}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={styles.list}>
        <div className={styles.buttonContainer}>
          <button className={styles.delete}>-</button>
        </div>
        <div>
          <p className={styles.name}>{name} </p>
          <span className={styles.number}>{number}</span>
        </div>
      </li>
    ))}
  </ul>
);
export default ContactsList;

// const contacts = [{ id: 'ssss', name: 'ddddddd', number: '66666666' }];
