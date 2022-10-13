import React, {useState, useEffect} from 'react'
import Sidebar from '../../mainComponents/sidebar/Sidebar'
import Searchbar from '../../mainComponents/searchbar/Searchbar'
import MusicControl from '../../mainComponents/musicControl/MusicControl'
import MainCard from './components/mainCard/MainCard'
import TopChart from './components/topChart/TopChart'
import NewRelease from './components/newRelease/NewRelease'

import './home.css'


const Home = () => {

  const [chartMeta, setChartMeta] = useState([]);
  const [albumData, setAlbumData] = useState([]);
  
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

  return (
    <div className='home-container'>
    
      <div className='maincard-display'>
        <MainCard/>
        <div className='topchart'>
          <h2>Top Charts</h2>
          {topCharts}
        </div>
      </div>
      
      <div className='release--container'>
          <h2>Top Releases</h2>
          <div className='album--container flex'>
              {albums}
          </div>
      </div>
      
      <MusicControl/>
    </div>
  )
}

export default Home