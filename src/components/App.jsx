import contacts from './data/contacts.json';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { ContactsList } from './ContactsList/ContactsList';
import ContactForm from './ContactForm/ContactForm.jsx';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: contacts,
    filter: '',}
  
  deleteContact = id => {
    this.setState({ contacts: this.state.contacts.filter(contact => contact.id !== id) });
  } 
 
  addNewContact = ({ name, number, contactIsList }) => {
    const newNameToLowerCase = name.toLowerCase();
    const { contacts } = this.state;
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

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  valueInputFilter = event => {
      this.setState({ filter: event.target.value });
    };
  visibleContacts = () => {
    const { filter, contacts } = this.state;
    const seekLetterOfFilter = filter.toLowerCase();
    
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(seekLetterOfFilter)
    );
  };
  componentDidMount() {
  const fiedContacts = localStorage.getItem('contacts');
    const contacts = JSON.parse(fiedContacts) ?? [];

    this.setState({ contacts });  console.log("змонтовано")
  }
  componentDidUpdate(prevProps, prevState) {
   
 if (prevState.contacts.length !== this.state.contacts.length) {
      const fiedContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', fiedContacts);
    }
  }

  render()  {

    const { filter } = this.state;
    const visibleContacts = this.visibleContacts();
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
       < ContactForm onSubmit={this.addNewContact} />
       < Filter value={filter} onChange={this.valueInputFilter} />
       < ContactsList contacts={visibleContacts} deleteContact={this.deleteContact} />
       
      </div>
  
  ) }  }