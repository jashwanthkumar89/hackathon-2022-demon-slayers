import './Login.css';
import { Redirect, RouteProps } from 'react-router-dom';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';



const Login = (props) => {
  const [userInput,setUserInput] = React.useState("");
  const [passwordInput,setPasswordInput] = React.useState("");
  const ActionDispatch = useDispatch();
  const loginAuth = useSelector((state)=>state);
  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log(userInput, passwordInput);
    ActionDispatch({
      type:"AUTHENTICATE",
      username: userInput.trim(),
      password: passwordInput.trim()
    })
    setUserInput("");
    setPasswordInput("");
  }
  return (  
      <div className="Login">
        {loginAuth && <Redirect to = {{ pathname:"/", state:{ from: props.location}}}/>}
        <h1> Login </h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <input className="input-bar" placeholder="Username" onChange={(event)=>{setUserInput(event.target.value)}} value={userInput}/>
          <input className="input-bar" placeholder="Password" type="password" onChange={(event)=>{setPasswordInput(event.target.value)}} value={passwordInput}/>
          <button className="login-button">Login</button>
        </form>
      </div>

  );
}

export default Login;
