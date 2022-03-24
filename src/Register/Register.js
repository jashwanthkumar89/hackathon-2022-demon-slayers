import './Register.css';
import { Redirect, RouteProps } from 'react-router-dom';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';


const Register = (props) => {
  const [userInput,setUserInput] = React.useState("");
  const [passwordInput,setPasswordInput] = React.useState("");
  const [passwordRetypeInput,setPasswordRetypeInput] = React.useState("");
  const ActionDispatch = useDispatch();
  const loginAuth = useSelector((state)=>state);
  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log(userInput, passwordInput);

    if(userInput.trim() === "") {
      alert("create a UserName");
      return;
    }

    if(passwordInput.trim() === "") {
      alert("create the Password");
      return;
    }

    if(passwordRetypeInput.trim() === "") {
      alert("Retype the Password");
      return;
    }

    if(passwordRetypeInput !== passwordInput) {
      alert("Created and retyped passwords do not match!");
      return;
    }

    ActionDispatch({
      type:"CREATE",
      username: userInput.trim(),
      password: passwordInput.trim()
    })
    setUserInput("");
    setPasswordInput("");
  }
  return (  
      <div className="Login">
        {loginAuth && <Redirect to = {{ pathname:"/", state:{ from: props.location}}}/>}
        <h1> Create Account </h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <input className="input-bar" placeholder="Username" onChange={(event)=>{setUserInput(event.target.value)}} value={userInput}/>
          <input className="input-bar" placeholder="Create Password" type="password" onChange={(event)=>{setPasswordInput(event.target.value)}} value={passwordInput}/>
          <input className="input-bar" placeholder="Retype Password" type="password" onChange={(event)=>{setPasswordRetypeInput(event.target.value)}} value={passwordRetypeInput}/>
          <button className="login-button">Create</button>
        </form>
      </div>

  );
}

export default Register;
