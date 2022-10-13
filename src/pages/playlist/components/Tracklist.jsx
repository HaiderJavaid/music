import React from 'react'


const Tracklist = (props) => {
  return (
    <div className='song flex'>
        <div className='flex'>
            <img className='album--art' src={props.coverArt} alt="hello" />
            <button>&#10084;</button> {/**Please help !!!! */}
        </div>
        <p><span>{props.title}</span> - <span>{props.artist}</span></p>
        <p>{props.album}</p>
        <p>{props.duration}</p>
        <button>&#8278;</button> {/**Please help !!!! */}
    </div>
  )
}

export default Tracklist