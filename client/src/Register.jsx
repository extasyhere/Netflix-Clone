import React, { useRef, useState } from 'react'
import "./Register.scss"
import logo from './netflix.png'
import axios from "axios"
import { Link, useHistory } from 'react-router-dom'


export default function Register() {

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[username,setusername]=useState("")
    const history = useHistory()

    
    const emailRef= useRef()
    const passwordRef= useRef()
    const usernameRef= useRef()


    const handleStart = () =>{
        setEmail(emailRef.current.value)
    }

    const handleFinish = async (e) =>{
        e.preventDefault()
        setPassword(passwordRef.current.value)
        setusername(usernameRef.current.value)
        try {
        await axios.post("auth/register" ,{email,username,password});
        history.push("/login")
            
        } catch (err) {
            console.log(err)
            
        }
        
    }


  return (
    <div className='register'>
        <div className="top">
            <div className="wrapper">
                <img className='logo' src={logo} alt="" />
                <a href='/login'>

                    <button className="loginButton">
                        Sign In
                    </button>
                </a>

            </div>
        </div>
        <div className="container">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            {!email ? (
            <div className="input">
                <input type="email" placeholder='email address' ref={emailRef}/>
                <button className='registerButton' onClick={handleStart}>Get Started</button>
            </div>) :(
                <form className="input">
                <input type="password" placeholder='password' ref={passwordRef}/>
                <input type="username" placeholder='username' ref={usernameRef}/>

                <button className='registerButton' onClick={handleFinish}>Start</button>
            </form>
            )
            }
        </div>
    </div>
  )
}
