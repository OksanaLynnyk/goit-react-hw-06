import css from './Contact.module.css'
import { FaUser, FaPhone } from "react-icons/fa6";
import { useDispatch} from 'react-redux';
import { deleteContact} from '../../redux/contactsSlice';


const Contact = ({name, number, id}) => {
  const dispatch = useDispatch();
  const onDeleteContact = () => {
    const action = deleteContact(id);
    dispatch(action);
  };

  return (
    <>
      <div>
        <div className={css.contactItemWrapper}>
          <FaUser />
          <p>{name}</p>
        </div>  
        <div className={css.contactItemWrapper}>
          <FaPhone />
          <p>{number}</p>
        </div>
      </div>
  
      <button type="button" onClick={onDeleteContact}
      >Delete</button>
    </>
  )
}

export default Contact

// Зв'яжи React-компоненти з Redux-логікою за допомогою хуків useSelector та useDispatch бібліотеки React Redux.



// Усі компоненти, крім карточки контакту Contact у списку контактів ContactList, не повинні приймати жодних пропсів. Замість цього, компоненти мають використовувати хук useSelector та функції-селектори слайсів для отримання необхідних їм значень.



// Для відправки екшенів компоненти використовують хук useDispatch та оголошені раніше екшени слайсів:


// Карточка контакту Contact відправляє екшен видалення контакту при кліку по кнопці видалення