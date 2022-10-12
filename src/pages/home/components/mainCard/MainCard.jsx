import React from 'react';
import './mainCard.css'


const MainCard = () => {
  return (
    <div className='maincard'>
      <div className="maincard-bg ">
      <div className="vector">
        <div className="leftside">
          <p className='text-yellow-500'>Currated Playlist</p>
          <div className="details ">
            <h3 className='title'>R & B Hits</h3>
            <p className='content'>
              All mine, Lie again, Petty call me everyday,
              Out of time, No love, Bad habit,<br/>
              and so much more
            </p>
          </div>
          <div className="bottom">
            <img src="../images/Frame4.png" alt="frame" />
            <div className="likes">
              <img src="../images/Heart.png" alt="heart" />
              <span>33k Likes</span>
            </div>
          </div>
        </div>
        <div className="rightside">
        
          <img src='../images/Hero1.png' alt="Hero" className='Hero'  />
        </div>
        </div>
      </div>
    </div>
  )
}

export default MainCard