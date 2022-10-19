
import React, {useState, useEffect} from 'react'
// import Sidebar from '../../mainComponents/sidebar/Sidebar'
// import Searchbar from '../../mainComponents/searchbar/Searchbar'

import MusicControl from '../../mainComponents/musicControl/MusicControl'
import MainCard from './components/mainCard/MainCard'
import TopChart from './components/topChart/TopChart'
import NewRelease from './components/newRelease/NewRelease'

import { motion } from "framer-motion"

import './home.css'


const Home = () => {

  const [chartMeta, setChartMeta] = useState([]);
  const [albumData, setAlbumData] = useState([]);

  const [collection, setCollection] = useState([]);

  const addToCollection = (chart) => {
      setCollection([...collection, chart]);
  };
  
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
      setAlbumData(data.albums)
      setChartMeta(data.playlist)
    })
  }, [])
  
  let topCharts = chartMeta.map((data, index)=> {
    console.log(data.playlistArt);
    return (
        <TopChart 
            key={index}
            id={data.id}
            compiler={data.compiler}
            playlistTitle={data.title}
            playlistCover={data.playlistArt}
            totalDuration={data.totalTime}
            addToCollection={addToCollection}
        />
    )
  })
  
  let albums = albumData.map((data, index) => {
    return (
        <NewRelease
            key={index}
            title={data.albumTitle}
            cover={data.albumCover}
            artist={data.albumArtist}
        />
    )
})
let collectionData = collection.map((data, index) => {
  return (
      <TopChart
      key={index}
      id={data.id}
      compiler={data.compiler}
      playlistTitle={data.title}
      playlistCover={data.playlistArt}
      totalDuration={data.totalTime}
      />
  )
})


  return (
    <div className='home-container'>
    

    <div className='maincard-display'>
        <MainCard/>
        <div className='topchart'>

          <motion.h2
          initial={{opacity: 0,}}
          animate={{opacity: 1, transition: {delay: 1.5}}}>Top Charts
          </motion.h2>

          {topCharts}
        </div>
      </div>

      <div className='release--container'>

          <motion.h2 
          initial={{opacity: 0,}}
          animate={{opacity: 1, transition: {delay: 1.5}}}>Top Releases
          </motion.h2>

          <div className='album--container flex'>
              {albums}
              {collectionData}
          </div>
          

      </div>


      
      <MusicControl/>
    </div>
  )
}

export default Home