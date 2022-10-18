import React from 'react'
import {Link} from 'react-router-dom'
import './topChart.css'

import heart from '../../../../assets/Heart.svg'

import { motion } from "framer-motion"




const TopChart = (props) => {

  const container = {
    hidden: { y: 20, opacity: 0 }, 
    visible: { opacity: 1, y: 0, transition: { delay : 1.5, }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 1.5, }
    }
  }

  return (
    <Link to={`/playlist/${props.id}`}>

      <motion.div 
<<<<<<< HEAD
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3 },
      }}
=======
>>>>>>> ba0d3b41426a2a37ff166af7070a2188e7c9146e
      className="singleChart"
      initial="hidden"
      animate="visible"
      variants={container}>
<<<<<<< HEAD

=======
          
>>>>>>> ba0d3b41426a2a37ff166af7070a2188e7c9146e
        <img src={props.playlistCover} height='50' className='img' alt="" />
        <div className="elements">
          <h4>{props.playlistTitle}</h4>
          <p><span>{props.compiler}</span></p> 
        <p>{props.totalDuration}</p>

        </div>
        <img src={heart} height='50' className='heart-icon' alt="" />
      </motion.div>
<<<<<<< HEAD

=======
      
>>>>>>> ba0d3b41426a2a37ff166af7070a2188e7c9146e
    </Link>
  )
}

export default TopChart