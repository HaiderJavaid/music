import React from 'react'

const PlaylistMeta = (props) => {
  return (
    <div className='playlist--header flex'>
        <div>
            <img src={props.playlistCover} alt="hello" />
        </div>
        
        <div className='playlist--header-info'>
            <h3>{props.title}</h3>
            <p className='desc'>{props.desc}.</p>
            <div className='meta--duration'>
                <p><span>{props.totalSongs}songs</span>.<span>16 hrs+</span></p>
            </div>
            {/* PLEASE UP HERE */}
            <div className='btn-container'>
                <button>Play all</button>
                <button>Add to collection</button>
                <button>&#10084;</button>
            </div>
        </div>
    </div>
  )
}


export default PlaylistMeta