import React from 'react';
import MyForm from './components/MyForm'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

const App = () => {
  // const navigate = useNavigate();
  return (  
    <div className="App"> 
      <h1>Home Page</h1>
      <Router>
        <Routes>
          <Route path="/flights" element={<MyForm />} />
          <Route path="/" element={<MyForm />} />
        </Routes>
      </Router>
      
    </div>  
  );  
}  
 
export default App;