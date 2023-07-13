import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { ContactsList } from './ContactsList/ContactsList';
import ContactForm from './ContactForm/ContactForm.jsx';
import { Filter } from './Filter/Filter';

export const App = () => {

  const [contacts, setContacts] = useState([ { "id": "id-1", "name": "Rosie Simpson", "number": "459-12-56" },
  { "id": "id-2", "name": "Hermione Kline", "number": "443-89-12" },
  { "id": "id-3", "name": "Eden Clements", "number": "645-17-79" },
  { "id": "id-4", "name": "Annie Copeland", "number": "227-91-26" }]);
  const [filter, setFilter] = useState("");

  
  useEffect(() => {
  const fiedContacts = localStorage.getItem('contacts');
  setContacts(JSON.parse(fiedContacts))
   }, []);
   
  useEffect(() => { 
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  
 const deleteContact = id => {
    setContacts( prevContacts => prevContacts.filter(contact => contact.id !== id) );
  } 
 
/*  const addNewContact = ({ name, number, contactIsList }) => {
    const newNameToLowerCase = name.toLowerCase();
    const { contacts } = newContact;
    contacts.forEach(contact => {
      if (contact.name.toLowerCase() === newNameToLowerCase || contact.number === number) {
        alert(`${contact.name}: ${contact.number} is already in contacts`)
        contactIsList = true;
        return;
      }
      if (contact.number === number) {
        alert(`${contact.number} existed in contact ${contact.name}`)
        contactIsList = true;
        return;
      }
    });

if (contactIsList) {
      return;
    }
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    setContacts(prevContacts => [...prevContacts, newContact]);

  }; */

const addNewContact = newContact => {
  const { name, number } = newContact;
  const contact = { id: nanoid(3), name: name, number: number };
  const toLowerCase = contacts.find(
  contact => contact.name.toLowerCase() === name.toLowerCase());
  console.log(toLowerCase, contacts) 
  if (toLowerCase) {
       alert(`${contact.name}: ${contact.number} is already in contacts`)
      return;
  }  
  
    setContacts(prevState => [...prevState, contact]);
  }; 



 const valueInputFilter = event => {
   setFilter(event.target.value);
   console.log(event.target.value)
    };
 const visibleContacts =()=> {
    const seekLetterOfFilter = filter.toLowerCase();
    
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(seekLetterOfFilter));
  };


 
  /*  const { filter } = this.state; */
  /*  const visibleContacts = visibleContacts();*/
   return(
     <div style={{
        margin: '0px auto' ,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
        boxShadow: '0 0 10px #b4b3b3',
        backgroundColor: 'rgb(230, 231, 234)',
        width: '500px',
      }}>
       < PhoneBook message={"Phonebook"} />
       < ContactForm onSubmit={addNewContact} /> 
       < Filter value={filter} onChange={valueInputFilter} />
       < ContactsList contacts={visibleContacts()} deleteContact={deleteContact} />
      </div>
  
  )
} 
   