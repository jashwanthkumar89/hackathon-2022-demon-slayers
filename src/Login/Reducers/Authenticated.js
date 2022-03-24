import {createStore} from 'redux';

const Users = [{
    Username: "qwertyui",
    Password: "12345678"
},
{
    Username: "jashwanth",
    Password: "12345678"
}];

const loginState = (state=false, action) => {
    if(action.type === "CREATE") {
        for(let user of Users) {
            if(user.Username === action.username) {
                alert("UserName already exists!");
                return false;
            }
            Users.push({
                Username:action.username,
                Password:action.password
            })
            return true;
        }
    }
    else if(action.type==="AUTHENTICATE") {
        console.log("Users", Users);
        for(let user of Users) {
            if(user.Username === action.username && user.Password === action.password) {
                localStorage.setItem("username",action.username);
                return true;
            }
        }
        alert("Wrong UserName or Password");
        return false;
    } else if(action.type === "LOGOUT") {
        localStorage.clear();
        return false;
    }
    else {
        return false;
    };
}

export const store = createStore(loginState);
// console.log(store.getState());