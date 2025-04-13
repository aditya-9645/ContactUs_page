import styles from './Button.module.css';

const Button = ({isOutline, text, icon, type = "button"}) => {
  return (
    <button type={type} className={ isOutline? styles.outlineBtn : styles.primaryBtn }>
        {icon}
        {text}
    </button>
  );
};

export default Button;