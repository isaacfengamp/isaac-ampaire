"use client"

import Link from 'next/link'
import { useState } from 'react'
import {FaFacebook, FaInstagram, FaLinkedin, FaSpotify, FaTwitter} from 'react-icons/fa'

export default function Navbar() {
  const[showNavi, setShowNav] = useState(false);
  function showNavfunc(){
    setShowNav(!showNavi)
  }
  const navItems = [
        {
            title: "Home",
            path: "#"
        },
        
        {
            title: "About",
            path: "#"
        },
        {
          title: "Resume",
          path: "#"
      },
        {
            title: "Service",
            path: "#"
        },
        {
          title: "Contact",
          path: "#"
      },
    ]
  return (
    <header>
      <h1>Ampaire</h1>
      <nav className= {showNavi? "shownave": ""}>
         {
            navItems.map((item,i) =>{return(
                <Link key={i} href={item.path}>{item.title}</Link>
            )})}
      </nav>
      <div className="socailIcons">
        <FaFacebook/>
        <FaTwitter/>
        <FaLinkedin/>
        <FaInstagram/>
        <FaSpotify/>
      </div>
      <div className="humberg">
        <button onClick={showNavfunc}>
            <span></span>
            <span></span>
            <span></span>
        </button>
      </div>
    </header>
  )
}
