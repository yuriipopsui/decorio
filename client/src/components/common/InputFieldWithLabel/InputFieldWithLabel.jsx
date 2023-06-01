import styles from "./InputFieldWithLabel.module.scss";

// eslint-disable-next-line react/prop-types
const InputFieldWithLabel = ({onChangeHandler}) => {
  return (
    <div className={styles.objectForm__inputField}>
      <label htmlFor="decorationType">Type of decor: </label>
      <input
        className={styles.objectForm__input}
        type="text"
        name="decorationType"
        placeholder="Input Type of decoration"
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default InputFieldWithLabel;
