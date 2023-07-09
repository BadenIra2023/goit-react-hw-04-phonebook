import PropTypes from 'prop-types';
import css from './ContactsList.module.css';

export const ContactsList = ( {contacts, deleteContact}) => {
return (<>
    <h2 className={css.title}>Contacts</h2>
    <ul>
         {contacts.map(contact => (
             <li className={css.item} key={contact.id}>
                 <p>{contact.name} :</p>
                 <p>{contact.number}</p>
             <button type="button" className={css.delete}
            onClick={() => deleteContact(contact.id)}
          >
            <span className={css.buttdel}>Delete</span>
            </button></li>
      ))}
    </ul>
    </>)
}
ContactsList.prototype = {
  deleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf ({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired, })
};