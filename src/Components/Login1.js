import React, { useState, useEffect} from 'react';
import './CSS/SignUp.css'
import logo from './Resource/logo.png'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

function Login1(props) {
   // const history = useHistory();
    const [employee, setEmployee] = useState({ email: '', password: ''});
    const url = "http://localhost:8080/user/login";

    const Login = (e) => {
        e.preventDefault();
        debugger;

        const data = {Email: employee.email, Password: employee.password};

        axios.post(url, data, { headers : {'Content-Type' : 'application/json'}})
            .then((result) => {
                debugger;
                console.log(result.data);
                const serializedState = JSON.stringify(result.data.UserDetails);
                var a = localStorage.setItem('myData', serializedState);
                console.log("A", a)
                const user = result.data.UserDetails;
                console.log(result.data.message);
                
                if (result.status === 202) {
                    props.history.push("/attendance")
                }
            })
            .catch ( error => {
                alert(error.message)
            })

            const onChange = (e) => {    
                e.persist();    
                debugger;    
                setEmployee({...employee, [e.target.name]: e.target.value});    
              }  
    }
    return (
        <div className="signUpDiv">
            <div className="logoDiv2">
                <img src={logo} alt="Asistencia" className="logoImage1"/>
                <h1 className="appName1"> Asistencia </h1>
            </div>

            <form className="signUpForm" onSubmit={Login}>
                <input
                    className="formInput"
                    placeholder="Email Id"
                    type="text"
                    value={employee.email}
                    onChange = {(e) => (e.target.value)}
                    required
                />
                
                <input
                    className="formInput"
                    placeholder="Password"
                    type="password"
                    value={employee.password}
                    onChange = {(e) => (e.target.value)}
                    required
                />

                <button className="signUpBtn" type="submit">Log in</button>
                <h3 className="ds">Don't have an account? Sign Up</h3>
            </form>
        </div>
    )
}

export default Login1