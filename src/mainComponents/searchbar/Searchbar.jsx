import React from 'react'
import './searchbar.css'
import logo from '../../assets/logo.svg'

import {Form} from 'react-bootstrap'

const Searchbar = () => {
  return (
    <div className='nav-bar'>
      <img  src={logo} className='logo'/>
      <div className='searchbar'>
        <input className='input' placeholder='Search artists' type="text"></input>
      </div>
    </div>
  )
}

export default Searchbar