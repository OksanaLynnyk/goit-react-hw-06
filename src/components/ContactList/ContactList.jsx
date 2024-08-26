import {  useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact"
import css from './ContactList.module.css'

const ContactList = () => {
    const filterValue = useSelector(selectNameFilter);
    const contacts = useSelector(selectContacts);

    const visibleContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    
    return (<ul className={css.phoneList}>
        {visibleContacts.map(({name, number, id}) => {
            return <li key={id} className={css.phoneListItem}>
                <Contact
                name={name}
                number={number}
                id={id}/>
            </li>
        })}
    </ul>)
}

export default ContactList