import React from 'react'
import './musicControl.css'
import james  from '../../assets/james.png';
import { FaPlayCircle } from "react-icons/fa";
import { IoPlaySkipBack} from "react-icons/io5";
import { TbArrowsShuffle } from "react-icons/tb";
import { IoPlaySkipForward } from "react-icons/io5";
import { TbRepeatOnce } from "react-icons/tb"
import { IoVolumeMedium } from "react-icons/io5";
import Slider from './slider';

const MusicControl = () => {
  return (
    
    <div className='musiccontrol w-full	border-t-stone-700 backdrop-blur-sm h-32 bottom-0  fixed flex justify-between gap- items-center '>
      
          {/* title and thumbnail */}
          <div className="thumbnail md:w-1/4 flex justify-start items-center  gap-3">
            <div className=" rounded-lg">
             <img src={james} height='50' className='img' alt="" />
            </div>
            <div className="title flex flex-col gap-1">
                <p className="font-semibold text-base	 text-white">Seasons in</p>
                <p className=" text-xs font-light text-gray-400">James</p>

            </div>
          </div>
          {/* pause, play, forward & next slideBar*/}
          <div className='container flex justify-end md:justify-center flex-col gap-4 w-1/2 items-center'>
          <div className="controls flex items-center  gap-10 ">
          <button className='shuffle hidden md:block'>
              <TbArrowsShuffle size={20} />
            </button>
            <button className='skipBack hidden md:block'>
              <IoPlaySkipBack size={20} />
            </button>
            <button>
              <FaPlayCircle size={30}  />
            </button>
            <button className='play'>
              <IoPlaySkipForward size={20}  />
            </button>
            <button className=' repeat hidden md:block'>
              <TbRepeatOnce size={20} />
            </button>
            <button></button>


          </div>
          {/* progress */}
          <div className=' hidden w-full md:block'>
          <Slider />
          </div>
          
          </div>
          {/* volume control */}
          <div className='volume hidden md:block md:w-1/4 justify-center items-center'>
            <div className='volumeControl flex items-center justify-center gap-3'>
            <button className='volume'>
              <IoVolumeMedium size={20} />
            </button>
            <div className='volume-slide w-full'> 
            <Slider />

            </div>
          
            </div>
          </div>
          
    </div>
  )
}

export default MusicControl
