import React from 'react'
import './newRelease.css'
import Rectangle1 from '../../../../assets/Rectangle1.svg'
import Rectangle2 from '../../../../assets/Rectangle2.svg'
import Rectangle3 from '../../../../assets/Rectangle3.svg'
import Rectangle4 from '../../../../assets/Rectangle4.svg'
import Rectangle5 from '../../../../assets/Rectangle5.svg'
import Rectangle6 from '../../../../assets/Rectangle6.svg'
import Rectangle7 from '../../../../assets/Rectangle7.svg'

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
