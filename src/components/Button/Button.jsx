import styles from './Button.module.css';

const Button = ({isOutline, text, icon}) => {
  return (
    <button className={ isOutline? styles.outlineBtn : styles.primaryBtn }>
        {icon}
        {text}
    </button>
  );
};

export default Button;