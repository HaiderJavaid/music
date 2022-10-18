import React from 'react'
import albumArt from '../../../../assets/album1.svg'
import './myCollections.css'

import { motion } from "framer-motion"


const MyCollections = ({title, cover, artist}) => {
  return (
<<<<<<< HEAD

        <div className="collection-card">
            <img className='album-coll' src={cover} alt=""/>


=======
    
        <div className="collection-card">
            <img className='album-coll' src={cover} alt=""/>

              
>>>>>>> ba0d3b41426a2a37ff166af7070a2188e7c9146e
            <div className='overlay'>
            <div className='text'>
                <h4>{title}</h4>
                <p>{artist}</p>   
            </div>
            </div>
        </div>
<<<<<<< HEAD

=======
    
>>>>>>> ba0d3b41426a2a37ff166af7070a2188e7c9146e
  )
}

export default MyCollections