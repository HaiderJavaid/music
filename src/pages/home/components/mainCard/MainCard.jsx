import React from 'react';
import './mainCard.css'
import Hero from '../../../../assets/Hero.svg'
import Frame from '../../../../assets/Frame.svg'
import Heart1 from '../../../../assets/Heart1.svg'



const MainCard = () => {
  return (
    <div className='maincard'>
      <div className="maincard-bg ">
      <div className="vector">
        <div className="leftside">
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
        </div>
        <div className="rightside">
        
          <img src={Hero} alt="Hero" className='Hero'  />
        </div>
        </div>
      </div>
    </div>
  )
}

export default MainCard