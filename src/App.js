import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Pre from './components/Pre';
import Mosoda from './components/Mosoda';
import Jellemzo from './components/Jellemzo';
import Partner from './components/Partner';
import Services from './components/Services';
import MunkaRuha from './components/Munkaruha';
import Referenciak from  './components/Referenciak';
import Ipari from './components/Ipari';
import About from './components/About';
import Job from './components/Job';
import Price from './components/Price';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
 
  return (
    <>
  <Header/>
  <Pre/>
  <Mosoda/>
  <Jellemzo/>
  <Partner/>
  <Services/>
  <MunkaRuha/>
  <Referenciak/>
 
  <Ipari/>
  <About/>
  <Job/>
  <Price/>
 
   <Contact/>
   <Footer/>
  </>
  );
}

export default App;
