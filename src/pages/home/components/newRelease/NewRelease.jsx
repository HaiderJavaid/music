import React from 'react'
import './newRelease.css'
import Rectangle1 from '../../../../assets/Rectangle1.svg'
import Rectangle2 from '../../../../assets/Rectangle2.svg'
import Rectangle3 from '../../../../assets/Rectangle3.svg'
import Rectangle4 from '../../../../assets/Rectangle4.svg'
import Rectangle5 from '../../../../assets/Rectangle5.svg'
import Rectangle6 from '../../../../assets/Rectangle6.svg'
import Rectangle7 from '../../../../assets/Rectangle7.svg'

const NewRelease = () => {
  return (
    <div className='newrelease'>
      <h4>New releases.</h4>
      <div className="container">
        <div className="song">
          <img src={Rectangle1} alt="Rectangle1" className="song-cover" />
          <p className="song-name">Song in a bubble <br />
          <span className="song-artiste">The Van</span> </p>
        </div>

        <div className="song">
          <img src={Rectangle2} alt="Rectangle2" className="song-cover" />
          <p className="song-name">Mountain <br />
          <span className="song-artiste">Krisx</span> </p>
        </div>

        <div className="song">
          <img src={Rectangle3} alt="Rectangle3" className="song-cover" />
          <p className="song-name">Limits <br />
          <span className="song-artiste">John Dillion</span> </p>
        </div>

        <div className="song">
          <img src={Rectangle4} alt="Rectangle4" className="song-cover" />
          <p className="song-name">Everything's Black <br />
          <span className="song-artiste">Ameed</span> </p>
        </div>

        <div className="song">
          <img src={Rectangle5} alt="Rectangle5" className="song-cover" />
          <p className="song-name">Cancelled <br />
          <span className="song-artiste">Enimen</span> </p>
        </div>

        <div className="song">
          <img src={Rectangle6} alt="Rectangle6" className="song-cover" />
          <p className="song-name">Namad <br />
          <span className="song-artiste">Makrol Eli</span> </p>
        </div>

        <div className="song">
          <img src={Rectangle7} alt="Rectangle7" className="song-cover" />
          <p className="song-name">Blind <br />
          <span className="song-artiste">Wiz zee</span> </p>
        </div>
      </div>
    </div>
  )
}

export default NewRelease