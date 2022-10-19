import React from 'react'
import './searchbar.css'
import logo from '../../assets/logo.svg'
import CollapsibleNav from './CollapsibleNav'
// import search from '../../assets/search.svg'

// import {Form} from 'react-bootstrap'

const Searchbar = () => {
  return (
    <div className='nav-bar'>
      <CollapsibleNav />
      <img  src={logo} alt='logo' className='logo'/>
      <div className='searchbar'>
        <input className='input' placeholder='Search artists' type="text"></input>
      </div>

    </div>
    
  )
}

export default Searchbar