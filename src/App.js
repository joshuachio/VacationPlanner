import React, {useState} from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MyForm from './components/MyForm';
import Login from './components/Login';
import Logout from './components/Logout';
import Profile from './components/Profile';
import Hotels from './components/Hotels';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="App">
      <h1>Vacation App</h1>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile/:id" element={<Profile username={username} password={password} />} />
          <Route path="/flights" element={<MyForm />} />
          <Route path="/hotels" element={<Hotels />} />
        </Routes>
    </div>
  );
}

export default App;
