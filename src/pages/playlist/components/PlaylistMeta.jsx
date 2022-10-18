import React from 'react'
import './playlistmeta.css'
import play from '../../../assets/Play.svg'
import collection from '../../../assets/music-square-add.svg'
import heart from '../../../assets/Heart2.svg'

import { motion } from 'framer-motion'

const PlaylistMeta = (props) => {
  return (
    <div className='playlist--header flex'>
        <div >
            <img src={props.playlistCover} alt="hello" />
        </div>
        
        <div className='playlist--header-info'>
            <h3>{props.title}</h3>
            <p className='desc'>{props.desc}.</p>
            <div className='meta--duration'>
                <p><span>{props.totalSongs} songs</span> - <span>16 hrs+</span></p>
            </div>
            {/* PLEASE UP HERE */}
            <div className='btn-container'>
                <button className='playlist-btn'>
                    <img src={play} alt = 'play' className='play'/>
                     Play all 
                    </button>
                <button className='playlist-btn'>
                    <img src={collection} alt="collection" className='play' />
                     Add to collection
                     </button>
                <button className='playlist-btn'>
                    <img src={heart} alt="heart" className='play heart' />
                </button>
            </div>
        </div>
    </div>
  )
}


export default PlaylistMeta