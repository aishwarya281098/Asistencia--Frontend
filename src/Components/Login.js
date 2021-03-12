import React, {useState} from 'react';
import './CSS/SignUp.css'
import logo from './Resource/logo.png'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
//import userClass from './User'

export class userData {
    constructor(userId, name, dept) {
      this.userId = userId;
      this.name = name;
      this.dept = dept
    }
    setId(id)
    {
        this.userId = id
    }
    setUsername(userName)
    {
        this.name = userName
    }
    setDepartment(dept)
    {
        this.dept = dept
    }
    getId()
    {
        return this.userId
    }
    getUserName()
    {
        return this.name
    }
    getDepartment()
    {
        return this.dept
    }
  }

let user = new userData()
export { user };

export default function Login() {
    
    const history = useHistory();
    const [email, setEmail] = useState(undefined)
    const [password, setPassword] = useState(undefined)

    const submitHandler = (e) => {
        e.preventDefault();
        const url = "http://localhost:8080/user/login";
    
        let data = {
            email : email,
            password : password
        }
    
    axios.post(url, data, { headers : {'Content-Type' : 'application/json'}})
    .then( res => {
        if (res.status === 202) {
            history.push("/attendance")
        }
        user.setId(res.data.id)
        user.setUsername(res.data.userName)
        user.setDepartment(res.data.department)
        
    })
    .catch ( error => {
        alert(error.message)
    });
}   
    return (
        <div className="signUpDiv">
            <div className="logoDiv2">
                <img src={logo} alt="Asistencia" className="logoImage1"/>
                <h1 className="appName1"> Asistencia </h1>
            </div>

            <form className="signUpForm" onSubmit={submitHandler}>
                <input
                    className="formInput"
                    placeholder="Email Id"
                    type="text"
                    value={email}
                    onChange = {(e) => {setEmail(e.target.value)}}
                    required
                />
                
                <input
                    className="formInput"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange = {(e) => {setPassword(e.target.value)}}
                    required
                />

                <button className="signUpBtn" type="submit">Log in</button>
                <h3 className="ds">Don't have an account? Sign Up</h3>
            </form>
        </div>
    )
}



