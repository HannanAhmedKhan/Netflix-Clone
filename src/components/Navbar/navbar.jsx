import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import  bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'

const navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>New & Popular</li>
          <li>Latest</li>
          <li>My List</li>
          <li>Browse by languages</li>
        </ul>
      </div>
      <div className="navbar-right">
      <img src={search_icon} alt="" className='icons'/>
<p>Children</p>
      <img src={bell_icon} alt="" className='icons'/>
      <div className="navbar-profile">
      <img src={profile_img} alt="" className='profile'/>
      <img src={caret_icon} alt="" />
      <div className="dropdown"> 
         <p onClick={()=>{logout()}}>Sign out</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default navbar;
