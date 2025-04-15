import styles from './Button.module.css';

const Button = ({onClick, isOutline, text, icon, type = "button" }) => {
  return (
    <button onClick={onClick} type={type} className={ isOutline? styles.outlineBtn : styles.primaryBtn }>
        {icon}
        {text}
    </button>
  );
};

export default Button;