import React from 'react';
import MyForm from './components/MyForm'
import Flights from './components/Flights';
import AutoComplete from './components/autocomplete';
import { airports } from './components/airports';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
const App = () => {
     
  return (  
    <div className="App"> 
      <MyForm airports={airports} />
      {/* <Flights props={airports} /> */}
      {/* { <AutoComplete props={airports} /> } */}
    </div>  
  );  
}  
 
export default App;