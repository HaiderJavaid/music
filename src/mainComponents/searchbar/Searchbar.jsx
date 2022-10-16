import React from 'react'
import './searchbar.css'

import logo from '../../assets/logo.svg'
// import search from '../../assets/search.svg'

// import {Form} from 'react-bootstrap'

const Searchbar = () => {
  return (
    <div>
    {/* <img  src={logo} alt='logo' className='logo'/>
    <div className='searchbar'>
    <img  src={search} alt='search' className='search-icon'/>


    <input className='input' placeholder='Search artists'></input>

    </div> */}

    
    <div className='nav-bar'>
      <img  src={logo} alt='logo' className='logo'/>
      <div className='searchbar'>
        <input className='input' placeholder='Search artists' type="text"></input>
      </div>
    </div>
    </div>
  )
}

export default Searchbar