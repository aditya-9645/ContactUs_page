import Button from '../Button/Button';
import styles from './ContactForm.module.css';
import {MdMessage} from 'react-icons/md';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from 'react';


const ContactForm = () => {

  const [name, setName] = useState("Guest");
  const [email, setEmail] = useState("guest123@gmail.com");
  const [text, setText] = useState("Your entered text will appear here.");

  const clickOnViaEmail = () => {
    console.log("Clicked on via Email")
  };

  const submitForm = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

  };

  return (
    <>
    <section className={`${styles.contactSection} container`}>
        <div className={`${styles.contactForm}`}>
          <div className={`${styles.twoPrimaryBtns}`}>
            <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
            <Button text="VIA CALL" icon={<FaPhoneAlt  fontSize="24px"/>}/> 
          </div>
          <Button onClick={clickOnViaEmail} isOutline = {true} text="VIA EMAIL FORM" icon={<MdEmail  fontSize="24px"/>}/>
          <form onSubmit={submitForm}>
              <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" required/>
              </div>
              <div className={styles.form_control}>
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" required/>
              </div>
              <div className={styles.form_control}>
                <label htmlFor="text">Query or Feedback</label>
                <textarea name="text" required/>
              </div>
              <Button isOutline = {true} text="SUBMIT" type="submit" icon={<MdEmail  fontSize="24px"/>}/>
          </form>
          <div>
            {name + " " + email + " " + text}
          </div>
        </div>
        <div className={`${styles.contactImage}`}>
          <img src="/images/contact_image.png" alt="miscallenous_image" className={styles.contact_image} />
        </div>
    </section>
    </>
  );
};

export default ContactForm;