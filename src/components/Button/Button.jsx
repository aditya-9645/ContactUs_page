import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button className={`${styles.primaryBtn}`}>
      
        {props.icon}
      
     
        {props.text}
      
       
    </button>
  );
};

export default Button;