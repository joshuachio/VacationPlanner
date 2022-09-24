import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {

  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [regStatus, setRegStatus] = useState("");


  const navigate = useNavigate()

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
        if (response.data.message) {
            setRegStatus(response.data.message)
        } else {
            setRegStatus(response.data[0].username)
            navigate("profile/:id")
        }
    });
  };

    return (
        <div className="App">
            <div className="registration">
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <h1>Registration</h1>
            </div>
            <div style={{
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
            }}>
                <label>Username: </label>
                <input
                    type = "text"
                    onChange={(e) => {
                        setUsernameReg(e.target.value);
                    }}
                />
            </div>
                <br/>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <label>Password: </label>
                    <input type = "text"
                    onChange={(e) => {
                        setPasswordReg(e.target.value);
                    }}
                />
            <br/>
            </div>
            <div style={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
            }}>
                <br/>
                <br/>
                <br/>
                <button onClick ={register}> Register </button>
                <br/>
                </div>
            </div>

            <div style={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
            }}>
                <label>{regStatus}</label>
            </div>
            </div>
    );
}
export default Register