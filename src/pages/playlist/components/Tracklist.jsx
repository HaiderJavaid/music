import React from 'react'
import Heart from '../../../assets/Heart3.svg'
import dots from '../../../assets/more-vertical.svg'


const Tracklist = (props) => {
  return (
    <div className='song flex' onClick={props.handleClick}>
        <div className='flex cover'>
            <img className='album--art' src={props.coverArt} alt="hello" />
            <img src={Heart} alt="heart" /> 
        </div>
        
        <p className='song-name'><span>{props.title}</span> - <span>{props.artist}</span></p>
        <p>{props.album}</p>
        <p>{props.duration}</p>
        <button className='menu-btn'>
          <img src={dots} alt="dots" />
        </button> 
    </div>
  )
}

export default Tracklist