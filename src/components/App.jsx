import contacts from './data/contacts.json';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { ContactsList } from './ContactsList/ContactsList';
import ContactForm from './ContactForm/ContactForm.jsx';
import { Filter } from './Filter/Filter';

export const App = () => {
/*  state = {
    contacts: contacts,
    filter: '',}*/
  
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");
  
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
  console.log(newContact)
    if (
      contacts.some(contact => contact.name === name) ||
      contacts.some(contact => contact.number === number)
    ) {
      alert(`This one is already in contacts`);
    } else {
      setContacts(prevContacts => [...prevContacts, newContact]);
    }
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


  useEffect(() => {
  const fiedContacts = localStorage.getItem('contacts');
  const contacts = JSON.parse(fiedContacts) ?? [];
  setContacts({ contacts });  console.log("змонтовано")
  }, []);
  
  useEffect(() => { 
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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
  
  ) }  