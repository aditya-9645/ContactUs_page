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
            <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
            <Button text="VIA CALL" icon={<FaPhoneAlt  fontSize="24px"/>}/> 
          </div>
          <Button isOutline = {true} text="VIA EMAIL FORM" icon={<MdEmail  fontSize="24px"/>}/>
          <form>
              <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name"/>
              </div>
              <div className={styles.form_control}>
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email"/>
              </div>
              <div className={styles.form_control}>
                <label htmlFor="text">Query or Feedback</label>
                <textarea name="text"/>
              </div>
              <Button isOutline = {true} text="SUBMIT" type="submit" icon={<MdEmail  fontSize="24px"/>}/>
          </form>
        </div>
        <div className={`${styles.contactImage}`}>
          <img src="/images/contact_image.png" alt="miscallenous_image" />
        </div>
    </section>
    </>
  );
};

export default ContactForm;