import React, {useState} from 'react'
import './CSS/SignUp.css'
import logo from './Resource/logo.png'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

export default function Signup() {
    const history = useHistory();
    const [email, setEmail] = useState(undefined)
    const [fullName, setFullName] = useState(undefined)
    const [department, setDepartment] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const [confirmPassword, setConfirmPassword] = useState(undefined)

    const submitHandler = (e) => {
        e.preventDefault();
        const url = "http://localhost:8080/user/signup";
        let data = {
            email: email,
            userName: fullName,
            department: department,
            password: password,
            confirmPassword: confirmPassword
        }
        axios.post(url, data, { headers: {'Content-Type': 'application/json'} })
            .then( res => {
                if (res.status === 202) {
                    history.push("/user/login")    
                }
            } )
            .catch( error =>{
                alert(error.message)
            } );
    }
    
    return (
        <div className="signUpDiv">
            <div className="logoDiv">
                <img src={logo} alt="Asistencia" className="logoImage"/>
                <h1 className="appName">Asistencia</h1>
            </div>
            
            <h3 className="formLabel">Please fill the details</h3>
            
            <form className="signUpForm" onSubmit={submitHandler}>
                <input 
                    className="formInput" 
                    placeholder="Email Id"
                    type="text"
                    value={email}
                    onChange = {(e)=>{setEmail(e.target.value)}}
                    required
                />
                <input 
                    className="formInput" 
                    placeholder="Full Name"
                    type="text"
                    value={fullName}
                    onChange = {(e)=>{setFullName(e.target.value)}}
                    required
                />
                <input 
                    className="formInput" 
                    placeholder="Department"
                    type="text"
                    value={department}
                    onChange = {(e)=>{setDepartment(e.target.value)}}
                    required
                />
                <input 
                    className="formInput" 
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange = {(e)=>{setPassword(e.target.value)}}
                    required
                />
                <input 
                    className="formInput" 
                    placeholder="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange = {(e)=>{setConfirmPassword(e.target.value)}}
                    required
                />
                <button className="signUpBtn" type="submit">Sign up</button>
            </form>
        </div>
    )
}