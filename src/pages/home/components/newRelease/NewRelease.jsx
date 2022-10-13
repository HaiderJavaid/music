import React from 'react'
import './newRelease.css'

const NewRelease = ({title, cover, artist}) => {
  return (
    <div className="album">
        <img src={cover} alt="art" />
        <h4>{title}</h4>
        <p>{artist}</p>
    </div>
  )
}

export default NewRelease
