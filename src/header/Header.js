import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import Home from "../Home/Home.js"

function Header() {
    return (
        <>
            <div className='portfolio'>
                <div className='header'>
                    <div className='headerMain'>
                        <div className='logo'>
                            <a href=''><span>P</span>ortfolio</a>
                        </div>
                        <div className='menu'>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/Resume">Resume</Link>
                            <Link to="/Portfolio">Portfolio</Link>
                            <Link to="/Contact">Contact</Link>
                        </div>
                    </div>
                </div> 
                <Home/> 
            </div>
           
        </>
    
    )
}
export default Header

