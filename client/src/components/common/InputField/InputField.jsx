import styles from "./InputField.module.scss";
import PropTypes from "prop-types";


const InputField = ({
  // className: className,
  labelTitle,
  type,
  name,
  placeholder,
  onChangeHandler,
}) => {
  return (
    <div className={styles.objectForm__inputField}>
      {
        labelTitle && <label htmlFor={name}>{`${labelTitle}: `} </label>
      }
      <input
        className={styles.objectForm__input}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

InputField.propTypes = {
  className: PropTypes.string.isRequired,
  labelTitle: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func
}
export default InputField;
