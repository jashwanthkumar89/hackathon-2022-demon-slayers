import './Profile.css';
import { Redirect, RouteProps } from 'react-router-dom';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';


const Profile = (props) => {
  const [userInput,setUserInput] = React.useState({
    emergency_contact:{
      name:"",
      mobile:""
    },
    secondary_contact:{
      name:"",
      mobile:""
    },
    BP:"",
    diabetes:"",
    others:""
  });
  
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
            onChange={(event)=>{setUserInput({
              ...userInput,
              emergency_contact:{
                name:event.target.value, 
                mobile:userInput.emergency_contact.mobile
                }
              })
            }} 
            value={userInput.emergency_contact.name}
            style={{width:"20%"}}
          />

          <div className="input-header" style={{fontSize:"16px", width:"15%"}}>
              Phone Number
          </div>
          <input 
            className="input-bar-profile" 
            placeholder="Emergency Contact Mobile Number" 
            onChange={(event)=>{setUserInput({
              ...userInput,
              emergency_contact:{
                name: userInput.emergency_contact.name,
                mobile:event.target.value
                }
              })}} 
            value={userInput.emergency_contact.mobile}  
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
            onChange={(event)=>{setUserInput({
              ...userInput,
              secondary_contact:{
                mobile: userInput.secondary_contact.mobile,
                name:event.target.value
                }
              })}} 
            value={userInput.secondary_contact.name}
            style={{width:"20%"}}
          />

          <div className="input-header" style={{fontSize:"16px", width:"15%"}}>
              Secondary Number
          </div>
          <input 
            className="input-bar-profile" 
            placeholder="Secondary Contact Mobile Number" 
            onChange={(event)=>{setUserInput({
              ...userInput,
              secondary_contact:{
                name: userInput.secondary_contact.name,
                mobile:event.target.value
                }
              })}} 
            value={userInput.secondary_contact.mobile}  
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
            onChange={(event)=>{setUserInput({
              ...userInput,
              BP:event.target.value
              })}} 
            value={userInput.BP}
          />
        </div>

        <div className="input-bar-wrapper">
          <div className="input-header">
              Diabetes
          </div>
          <input 
            className="input-bar-profile" 
            placeholder="Mention any health issues related to diabetes.." 
            onChange={(event)=>{setUserInput({
              ...userInput,
              diabetes:event.target.value
              })}} 
            value={userInput.diabetes}
          />
        </div>

        <div className="input-bar-wrapper" style={{alignItems:"flex-start"}}>
          <div className="input-header">
              Other health issues
          </div>
          <textarea 
            className="input-bar-profile" 
            placeholder="Specify any other health issues here.." 
            onChange={(event)=>{setUserInput({
              ...userInput,
              others:event.target.value
              })}} 
            value={userInput.others}
            style={{height:"100px"}}
          />
        </div>

        <button className="login-button">
          Submit
        </button>
      </div>

      

  );
}

export default Profile;
