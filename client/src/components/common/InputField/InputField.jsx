import styles from "./InputField.module.scss";
import PropTypes from "prop-types";


const InputField = ({
  labelTitle,
  type,
  name,
  placeholder,
  value,
  onChange
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
        value={value}
        onChange={onChange}
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
  value: PropTypes.string,
  onChange: PropTypes.func
}
export default InputField;
