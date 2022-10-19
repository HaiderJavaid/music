import React from 'react';
import './mainCard.css'
import Hero from '../../../../assets/Hero.svg'
import Frame from '../../../../assets/Frame.svg'
import Heart1 from '../../../../assets/Heart1.svg'

import { motion } from "framer-motion"


const MainCard = () => {

  const container = {
    hidden: { y: 20, opacity: 0 }, 
    visible: { opacity: 1, y: 0, transition: { delay : 0.5, }
    }

  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 1, }
    }
  }

  return (
    <div className='maincard'>

      <motion.div className="maincard-bg"
                  initial='hidden'
                  animate='visible'
                  variants={container} >

        <motion.div className="vector"

        whileHover={{
          scale: 1.1,
          transition: { duration: 0.5 },
        }}

                    initial='hidden'
                    animate='visible'
                    variants={item}>

          <motion.div className="leftside"
                      initial='hidden'
                      animate='visible'
                      variants={item}>

              <p className=''>Currated Playlist</p>

            <div className="details ">
              <h3 className='title'>R & B Hits</h3>
              <p className='content'>
                All mine, Lie again, Petty call me everyday,
                Out of time, No love, Bad habit,<br/>
                and so much more
              </p>
            </div>

            <div className="bottom">
              <img src={Frame} alt="frame" />
              <div className="likes">
                <img src={Heart1} alt="heart" />
                <span>33k Likes</span>
              </div>
            </div>
          </motion.div>

          <div className="rightside">

            <img src={Hero} alt="Hero" className='Hero'  />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
  

export default MainCard