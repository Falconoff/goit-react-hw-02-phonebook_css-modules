import s from './Filter.module.scss';

const Filter = ({ value, onChange }) => (
  <div className={s.filter}>
    <label>
      <p className={s.text}>Find contacts by name</p>
      <input type="text" name="" id="" value={value} onChange={onChange} />
    </label>
  </div>
);
export default Filter;
