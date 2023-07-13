import { useState } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid'
export default function ContactForm  ({onSubmit}) {
/*  state = {
    name: '',
    number: '',
  }; */

const [state, setState] = useState({
  name: '',
  number: '',
});  
  


  

const handleChange = nameValueInput => event => {
  const { target } = event;
  console.log(nameValueInput)
  console.log(target)
     setState(prevState => ({ ...prevState,[nameValueInput]: target.value,
    
     }));
  console.log(state)
  };

const handleSubmit = event => {
    event.preventDefault();
  onSubmit({ name, number }); 
  
    resetForm();
  };

  const resetForm = () => {
    setState({
      name: '',
      number: '',
    });
  };

  
    const { name, number } = state;

    return (
      <form  onSubmit={handleSubmit}>
        <label className={css.labname}>
            <span>Name: </span>
        

          <input
            className={css.inpname}
            type="text"
            placeholder="Enter name of contact"
            name="name"
            id={nanoid()}
            value={name}
            onChange={handleChange('name')}
            pattern= "^[A-Za-z\u0080-\uFFFF ']+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.labname}>
          <span>Number: </span>
       
          <input
            className={css.inpname}
            type="tel"
            placeholder= "Enter number of contact"
            name="number"
            id={nanoid()}
            value={number}
            onChange={handleChange('number')}
            pattern="^(\+?[0-9.\(\)\-\s]*)$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
         </label>
        <button className={css.buttonadd} type="submit"> Add contact
        </button>
      </form>

    )
   }

