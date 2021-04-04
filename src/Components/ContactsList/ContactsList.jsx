import styles from './ContactList.module.css';

const ContactsList = ({ contacts, onDelete }) => (
  <ul className={styles.container}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={styles.list}>
        <div className={styles.buttonContainer}>
          <button className={styles.delete} onClick={() => onDelete(id)}>
            -
          </button>
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

// const g = [
//   { id: 'ssss', name: 'ddddddd', number: '66666666' },
//   { id: 'ffffff', name: 'ttttttttt', number: '66666666' },
//   { id: 'ssss', name: 'gggggggg', number: '66666666' },
// ];

// const filter = 'dd';
// const normilizeFilter = filter.toLowerCase();

// console.log(
//   g.filter(({ name }) => name.toLowerCase().includes(normilizeFilter)),
// );
