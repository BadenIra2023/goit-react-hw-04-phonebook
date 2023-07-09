import PropTypes from 'prop-types';
import css from './PhoneBook.module.css';
export const PhoneBook = ({ message }) => {
return (<>
    <h2 className={css.title}>{message}</h2>
    </>)
}
PhoneBook.prototype = { message: PropTypes.string.isRequired}