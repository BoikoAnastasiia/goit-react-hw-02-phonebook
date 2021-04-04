import styles from './Search.module.css';

const Search = ({ value, onChange }) => (
  <div className={styles.container}>
    <label className={styles.label}>
      Phone book search
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </label>
  </div>
);
export default Search;
