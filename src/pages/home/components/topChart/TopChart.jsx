import React from 'react'
import './topChart.css'
import album1 from '../../../../assets/album1.svg'
import album2 from '../../../../assets/album2.svg'
import album3 from '../../../../assets/album3.svg'
import heart from '../../../../assets/Heart.svg'



const TopChart = () => {
  return (
    <div className='topchart'>

      <div className="singleChart">
        <img src={album1} height='50' className='img' alt="" />
        <div className="elements">
          <h4>Golden age of 80s</h4>
          <p><span>Sean Swadder</span></p> 
        <p>2:34</p>

        </div>
        <img src={heart} height='50' className='heart-icon' alt="" />

      </div>

      <div className="singleChart">
        <img src={album2} height='50' className='img' alt="" />
        <div className="elements">
          <h4>Raeggae "n" blues</h4>
          <p><span>Dj YK mule</span></p> 
        <p>1:02</p>

        </div>
        <img src={heart} height='50' className='heart-icon' alt="" />

      </div>

      <div className="singleChart">
        <img src={album3} height='50' className='img' alt="" />
        <div className="elements">
          <h4>Tomorrow's tunes</h4>
        <p><span>Obi Datti</span></p> 
        <p>2.01</p>

        </div>
        <img src={heart} height='50' className='heart-icon' alt="" />

      </div>

    </div>
  )
}

export default TopChart