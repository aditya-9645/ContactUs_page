import Button from '../Button/Button';
import styles from './ContactForm.module.css';
import {MdMessage} from 'react-icons/md';


const ContactForm = () => {
  return (
    <>
    <section className={`${styles.contactSection} container`}>
        <div className={`${styles.contactForm}`}>
          <Button text="Via Support Chat" icon={<MdMessage fontSize="24px"/>}/>
          <Button text="Via Call" icon={<MdMessage fontSize="24px"/>}/>
        </div>
        <div className={`${styles.contactImage}`}>
          <img src="/images/contact_image.png" alt="miscallenous_image" />
        </div>
    </section>
    </>
  );
};

export default ContactForm;