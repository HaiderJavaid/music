import React from 'react'
import './sidebar.css'
import homeIcon from '../../assets/Home.svg'
import playlist from '../../assets/playlist.svg'
// import playlistGlow from '../../assets/playlistGlow.svg'
import radio from '../../assets/radio.svg'
import videos from '../../assets/videos.svg'
import profile from '../../assets/profile.svg'
import logout from '../../assets/Logout.svg'

import {Link} from 'react-router-dom'



const Sidebar = () => {

 
  return (
<div>
  
    <div className='sidebar'>
    <div className="sidebar-icons">

        <Link to={'/'}>
          <img className='single-icon' src={homeIcon} alt=""/>
        </Link>
        
        <Link to={'/collection'}>
          <img className='single-icon' src={playlist} alt=""/>
        </Link>
       
        <img className='single-icon' src={radio} alt="" />
        <img className='single-icon' src={videos} alt="" />
      </div>
    </div>
    <div className='sidebar-user'>
    <div className="sidebar-icons">
        <img className='single-icon' src={profile} alt="" />
        <img className='single-icon' src={logout} alt="" />    
      </div>
      </div>


</div>
    
  )
}

export default Sidebar