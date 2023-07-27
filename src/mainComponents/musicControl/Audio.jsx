import React from 'react'

function Audio({music, handleEnded}, ref) {
  return (
    <div>
      <audio 
        ref={ref} 
        src={music} 
        preload='metadata' 
        onEnded={handleEnded}>
      </audio>
    </div>
  )
}

const audioRef = React.forwardRef(Audio)

export default audioRef