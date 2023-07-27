import React from 'react'

function Volume({value, handleChange}, ref) {
  return (
    <div>
        <input 
          type="range"
          ref={ref} 
          className="progress--bar" 
          id="volume"  
          min="1" 
          max="100" 
          step="1"
          value={value} 
          onChange={handleChange}/>
    </div>
  )
}

const volumeRef = React.forwardRef(Volume)
export default volumeRef
