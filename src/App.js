import React from 'react';
import './style.css';
import Header from "./Mycomponents/Header.js" 
import Todos from "./Mycomponents/Todos.js" 
import Footer from "./Mycomponents/Footer.js" 

export default function App() {
  return (

    <>
    <Header  />
    <Todos />
    <Footer />
    </>
  );
}
