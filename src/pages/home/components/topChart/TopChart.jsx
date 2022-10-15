import React from 'react'
import {Link} from 'react-router-dom'
import './topChart.css'

import heart from '../../../../assets/Heart.svg'



const TopChart = (props) => {
  return (
      <Link to={`/playlist/${props.id}`} className="singleChart">
        <img src={props.playlistCover} height='50' className='img' alt="" />
        <div className="elements">
          <h4>{props.playlistTitle}</h4>
          <p><span>{props.compiler}</span></p> 
        <p>{props.totalDuration}</p>

        </div>
        <img src={heart} height='50' className='heart-icon' alt="" />
      </Link>
  )
}

export default TopChart