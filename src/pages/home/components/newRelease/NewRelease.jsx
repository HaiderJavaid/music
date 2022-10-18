import React from 'react'
import './newRelease.css'
import { motion } from "framer-motion"


const NewRelease = ({title, cover, artist}) => {

  const container = {
    hidden: { y: 20, opacity: 0, },
    visible: { y: 0, opacity: 1,
    transition: {
      delay: 1.5,
    } },


  };

  return (

    <motion.div 
              className="album"
              initial="hidden"
              animate="visible"
              variants={container}>

        <img src={cover} alt="art" />
        <h4>{title}</h4>
        <p>{artist}</p>

    </motion.div>
  )
}

export default NewRelease
