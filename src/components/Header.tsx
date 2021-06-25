import React from 'react'

import '../scss/header.scss'
import logo from '../assets/images/pokedex.png'



const Header:React.FC =()=>{
return(
    <div className="header-container">
        <div className="title">
        <img className="logo" width={60} height={60} src={logo} alt="pokeball"/>
        <h1>My Pokedex</h1>
       
      
        </div>
   

    </div>
)
}

export default Header