import { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import ContactHeader from './components/ContactHeader/ContactHeader';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation/>
    <ContactHeader/>
    <ContactForm/>
    </>
  )
}

export default App
