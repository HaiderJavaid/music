import React, {useState, useEffect} from 'react'
import MyCollections from './components/myCollections/MyCollections'
import './collection.css'

import { motion } from "framer-motion"


const Collection = () => {

    const [collection, setCollection] = useState([])

    useEffect(() => {
        fetch('musica-data.json',
        {
          headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json' 
          }
        })
        .then((res) => res.json())
        .then((data) => {
          setCollection(data.playlist)
        })
      }, [])

      let collections = collection.map((data, index) => {
        return (
            <MyCollections
                key={index}
                title={data.title}
                cover={data.playlistArt}
                artist={data.compiler}
            />
        )
    })

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
    <div className='page-layout'>
        <motion.div className="navigation"
                    initial='hidden'
                    animate='visible'
                    variants={container}>
            <button className='btn-navi'>My collection</button>
            <button className='btn-navi'>Likes</button>
        </motion.div>


        <div className="collection-item">
        <motion.div className='comp-layout'
        initial='hidden'
        animate='visible'
        variants={item}>
            {collections}
        </motion.div>
        </div>
    </div>
  )
}

export default Collection