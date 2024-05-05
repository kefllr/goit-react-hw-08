import css from "./Contact.module.css";
import { apiDeleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDelete = (contactId) => {
    dispatch(apiDeleteContact(contactId));
  };
  return (
    <div className={css.userBox}>
      <ul className={css.userContact}>
        <li>{name}</li>
        <li>{number}</li>
      </ul>
      <button className={css.deleteBtn} onClick={() => onDelete(id)} type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;