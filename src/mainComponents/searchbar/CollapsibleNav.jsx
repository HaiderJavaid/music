import React from 'react'
import menu from '../../assets/menu.svg'
import { useState } from 'react'
import './collapsibleNav.css'
import homeIcon from '../../assets/Home.svg'
import playlist from '../../assets/playlist.svg'
// import playlistGlow from '../../assets/playlistGlow.svg'
import radio from '../../assets/radio.svg'
import videos from '../../assets/videos.svg'
import profile from '../../assets/profile.svg'
import logout from '../../assets/Logout.svg'

import {Link} from 'react-router-dom'

const CollapsibleNav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <div>
      <button 
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
          
      }}
      >
        <img src={menu} alt="menu" />
      </button>

      <div className={
        isNavExpanded ? "side-menu expanded" : "side-menu"}>
      
            <ul className="sidebar-icons">
              <li>
                <Link to={'/'}>
                  <img className='single-icon link' src={homeIcon} alt=""/>
                  <span>Home</span>
                </Link>
              </li>

              <li>
                <Link to={'/collection'}>
                  <img className='single-icon link' src={playlist} alt=""/>
                  <span>My Collection</span>

                </Link>
              </li>

              <li>
                <img className='single-icon' src={radio} alt="" />
                <span>Radio</span>

              </li>

              <li>
                <img className='single-icon' src={videos} alt="" />
                <span>Music Videos</span>

              </li>
    
        <li>
          <img className='single-icon' src={profile} alt="" />
          <span>Profile</span>

        </li>

        <li>
          <img className='single-icon' src={logout} alt="" />
          <span>Log Out</span>

        </li>    
      </ul>
    
      </div>
    </div>
  )
}

export default CollapsibleNav