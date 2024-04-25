import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { useEffect } from 'react';



function App() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      // once: true, 
    });
  }, []);
  return(
    <>
      <Header/>
      <Main/>
    </>
  )
}

export default App
