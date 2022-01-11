import PropTypes from 'prop-types';
import s from './Contacts.module.scss';

export default function Contacts({ arr, onDelContact }) {
  return (
    <ul className={s.list}>
      {arr.map(({ name, number, id }) => (
        <li className={s.list__item} key={id}>
          <p>
            <span className={s.name}>{name}: </span>
            <span className={s.number}>{number}</span>
          </p>
          <button className={s.btn} onClick={() => onDelContact(id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}

Contacts.propTypes = {
  arr: PropTypes.array.isRequired,
};
