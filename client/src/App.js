import React from 'react';
import MyForm from './components/MyForm'
import Flights from './components/Flights';
import { airports } from './components/Airports';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
const App = () => {
     
  return (  
    <div className="App"> 
      <MyForm airports={airports} />
      {/* <Flights props={airports} /> */}
    </div>  
  );  
}  
 
export default App;