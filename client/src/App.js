import React from 'react';
import MyForm from './components/MyForm'
import Flights from './components/Flights';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
const App = () => {
     
  return (  
    <div className="App"> 
      <MyForm />
      <Flights />
    </div>  
  );  
}  
 
export default App;