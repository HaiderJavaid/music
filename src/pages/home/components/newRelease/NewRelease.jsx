import React from 'react'
import './newRelease.css'
import Rectangle1 from '../../../../assets/Rectangle1.svg'
import Rectangle2 from '../../../../assets/Rectangle2.svg'
import Rectangle3 from '../../../../assets/Rectangle3.svg'
import Rectangle4 from '../../../../assets/Rectangle4.svg'
import Rectangle5 from '../../../../assets/Rectangle5.svg'
import Rectangle6 from '../../../../assets/Rectangle6.svg'
import Rectangle7 from '../../../../assets/Rectangle7.svg'

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
