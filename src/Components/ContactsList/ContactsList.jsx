const ContactsList = ({ contacts }) => (
  <ul>
    {contacts.map(contact => (
      <li>{contact} </li>
    ))}
  </ul>
);
export default ContactsList;
