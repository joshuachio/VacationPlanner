import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const Login = () => {

    const [usernameReg, setUsernameReg] = useState("")
    const [passwordReg, setPasswordReg] = useState("")
  
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
  
    const [loginStatus, setLoginStatus] = useState("");

    const navigate = useNavigate()

    const register = () => {
        Axios.post("http://localhost:5000/user/register", {
          username: usernameReg,
          password: passwordReg,
        }).then((response) => {
            console.log(response);
        });
      };
    
    const login = () => {
        Axios.post("http://localhost:5000/user/login", {
        username: username,
        password: password,
        }).then((response) => {

        if (response.data.message) {
            setLoginStatus(response.data.message)
            //setLoggedIn(true)
        } else {
            setLoginStatus(response.data[0].username)
            //setLoggedIn(false)
        }
        console.log(response.data);
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
            </div>
        </div>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div className="login">
                <h1>Login</h1>
            </div>
        </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <input
                type="text"
                placeholder="Username..."
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
                />
            </div>
                <br/>
                <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                }}>
                <input
                    type="password"
                    placeholder="Password..."
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                </div>
                <br/>
                <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                }}>
                <button
                    onClick ={login}
                    //onClick={loginStatus ? navigate("/profile") : undefined}
                    /*onClick={() =>
                        navigate("/profile")
                    }*/
                > Login </button>
                </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <h1>{loginStatus}</h1>
            </div>
            </div>
    );
}

export default Login;