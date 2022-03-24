import './App.css';
import {Route, Switch} from 'react-router-dom';
import Login from './Login/Login';
import QRCode from './QRCode/QRCode';
import HomePage from './HomePage/HomePage';
import Register from './Register/Register';
import NavBar from './NavBar/NavBar';
import ProtectedRoute from './Components/ProtectedRoute';
import Profile from './Profile/Profile';


const RouterApp = () => {
  return (
      <div className="App">
        <NavBar />
        <Switch>
            <ProtectedRoute exact path="/" component={HomePage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <ProtectedRoute exact path="/qr-code" component={QRCode} />
            <ProtectedRoute exact path="/profile" component={Profile} />
            <Route component={()=>{return <h1>Page does not exist</h1>}} />
        </Switch>
      </div>
  );
}

export default RouterApp;
