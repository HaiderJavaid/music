import React from 'react'
import albumArt from '../../../../assets/album1.svg'
import './myCollections.css'

import { motion } from "framer-motion"


const MyCollections = ({title, cover, artist}) => {
  return (
    
        <div className="collection-card">
            <img className='album-coll' src={cover} alt=""/>

              
            <div className='overlay'>
            <div className='text'>
                <h4>{title}</h4>
                <p>{artist}</p>   
            </div>
            </div>
        </div>
    
  )
}

export default MyCollections