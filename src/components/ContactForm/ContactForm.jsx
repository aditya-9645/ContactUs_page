import Button from '../Button/Button';
import styles from './ContactForm.module.css';
import {MdMessage} from 'react-icons/md';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const ContactForm = () => {
  return (
    <>
    <section className={`${styles.contactSection} container`}>
        <div className={`${styles.contactForm}`}>
          <div className={`${styles.twoPrimaryBtns}`}>
            <Button text="Via Support Chat" icon={<MdMessage fontSize="24px"/>}/>
            <Button text="Via Call" icon={<FaPhoneAlt  fontSize="24px"/>}/> 
          </div>
          <Button isOutline = {true} text="Via Email Form" icon={<MdEmail  fontSize="24px"/>}/>
        </div>
        <div className={`${styles.contactImage}`}>
          <img src="/images/contact_image.png" alt="miscallenous_image" />
        </div>
    </section>
    </>
  );
};

export default ContactForm;