import React from 'react';
import MyForm from './components/MyForm'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './components/Home'; 

const App = () => {
  // const navigate = useNavigate();
  return (  
    <div className="App"> 
      {/* <MyForm /> */}
      {/* <button onClick={() => navigate.push("/flights")}> Flights </button> */}
      {/* <button onClick={() => navigate.push("/")}> Home Page </button> */}
      <h1>Home Page</h1>
      <Router>
        <Routes>
          <Route path="/flights" element={<MyForm />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      
    </div>  
  );  
}  
 
export default App;