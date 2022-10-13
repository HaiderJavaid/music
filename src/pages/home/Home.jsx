import React from 'react'
// import Sidebar from '../../mainComponents/sidebar/Sidebar'
// import Searchbar from '../../mainComponents/searchbar/Searchbar'
import MusicControl from '../../mainComponents/musicControl/MusicControl'
import MainCard from './components/mainCard/MainCard'
import TopChart from './components/topChart/TopChart'
import NewRelease from './components/newRelease/NewRelease'

import './home.css'

const home = () => {
  return (
    <div>
    
      <div className='maincard-display'>
        <MainCard/>
        <TopChart/>
      </div>
      <NewRelease/>
      <MusicControl/>
    </div>
  )
}

export default home