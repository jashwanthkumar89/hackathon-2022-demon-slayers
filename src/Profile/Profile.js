import './Profile.css';
import { Redirect, RouteProps } from 'react-router-dom';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';


const Profile = (props) => {
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
        <h1 style={{marginBottom:"80px"}}> Profile </h1>
        <div className="input-bar-wrapper" style={{marginLeft:"20px", marginRight:"20px", justifyContent:"space-evenly"}}>
          <div className="input-header" style={{fontSize:"16px", width:"15%"}}>
              Emergency Contact
          </div>
          <input 
            className="input-bar-profile" 
            placeholder="Emergency Contact Name" 
            onChange={(event)=>{setUserInput(event.target.value)}} 
            value={userInput}
            style={{width:"20%"}}
          />

          <div className="input-header" style={{fontSize:"16px", width:"15%"}}>
              Phone Number
          </div>
          <input 
            className="input-bar-profile" 
            placeholder="Emergency Contact Mobile Number" 
            onChange={(event)=>{setUserInput(event.target.value)}} 
            value={userInput}  
            style={{width:"20%"}}
          />
        </div>

        <div className="input-bar-wrapper" style={{marginLeft:"20px", marginRight:"20px", justifyContent:"space-evenly"}}>
          <div className="input-header" style={{fontSize:"16px", width:"15%"}}>
              Secondary Contact
          </div>
          <input 
            className="input-bar-profile" 
            placeholder="Secondary Contact Name" 
            onChange={(event)=>{setUserInput(event.target.value)}} 
            value={userInput}
            style={{width:"20%"}}
          />

          <div className="input-header" style={{fontSize:"16px", width:"15%"}}>
              Secondary Number
          </div>
          <input 
            className="input-bar-profile" 
            placeholder="Secondary Contact Mobile Number" 
            onChange={(event)=>{setUserInput(event.target.value)}} 
            value={userInput}  
            style={{width:"20%"}}
          />


        </div>
        
        <div className="input-bar-wrapper">
          <div className="input-header">
              BP Value
          </div>
          <input 
            className="input-bar-profile" 
            placeholder="Enter your BP value" 
            onChange={(event)=>{setUserInput(event.target.value)}} 
            value={userInput}
          />
        </div>

        <div className="input-bar-wrapper">
          <div className="input-header">
              Diabetes
          </div>
          <input 
            className="input-bar-profile" 
            placeholder="Mention any health issues related to diabetes.." 
            onChange={(event)=>{setUserInput(event.target.value)}} 
            value={userInput}
          />
        </div>

        <div className="input-bar-wrapper" style={{alignItems:"flex-start"}}>
          <div className="input-header">
              Other health issues
          </div>
          <textarea 
            className="input-bar-profile" 
            placeholder="Specify any other health issues here.." 
            onChange={(event)=>{setUserInput(event.target.value)}} 
            value={userInput}
            style={{height:"100px"}}
          />
        </div>
      </div>

      

  );
}

export default Profile;
