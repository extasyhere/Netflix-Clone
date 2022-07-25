import React, { useContext, useState } from 'react'
import "./Navbar.scss"
import SearchIcon from "./SearchIcons.png"
import Notifications from "./Notifications.png"
import Me from './Me.jpg'
import Arrow from './arrowdown.png'
import logo from './netflix.png'
import {Link} from "react-router-dom"
import { AuthContext } from './authContext/AuthContext'
import { logOut } from './authContext/AuthAction'




const Navbar = () => {
    const [isScrolled,setIsScrolled]=useState(false)

    window.onscroll=() =>{
        setIsScrolled(window.pageYOffset === 0? false:true );
        return () => (window.onscroll=null);
    };
    //console.log(isScrolled);
    const {dispatch}=useContext(AuthContext)

  return (
    <div className={isScrolled?'navbar scrolled':'navbar'}>
        <div className="container">
            <div className="left">
                <img
                    src={logo}
                />
                <Link to="/" className='link'>
                <span>Homepage</span>
                </Link >
                <Link className='link' to="/series">
                <span>Series</span>
                </Link>
                <Link to="movies" className='link'>
                <span>Movies</span>
                </Link>
                <span>News & Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <img className='icon'
                    src={SearchIcon}/>
                <span>KID</span>
                <img className='icon'
                    src={Notifications}/>
                <img className='dp'
                    src={Me}/>
                <div className="profile">
                    <img className='icon'
                        src={Arrow}/>
                    <div className="options">
                        <span>Settings</span>
                        <span onClick={dispatch(logOut())}>Logout</span>
                    </div>
                </div>
                

                
            </div>
        </div>
    </div>
  )
}

export default Navbar