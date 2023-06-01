import styles from "./Button.module.scss";

// eslint-disable-next-line react/prop-types
const Button = ({ buttonTitle, buttonColor, onClick }) => {
  return (
    <button
      className={styles.button}
      style={{ backgroundColor: buttonColor }}
      onClick={onClick}
    >
      {buttonTitle}
    </button>
  );
}

export default Button;
