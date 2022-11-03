import React, {useState, useRef, useEffect} from 'react'
import './musicControl.css'
import james from '../../assets/james.png';
// import song from '../../assets/tracks/audio_rock.wav'
import { FaPlay } from "react-icons/fa";
import {FaPause} from "react-icons/fa";
import { IoPlaySkipBack} from "react-icons/io5";
import { TbArrowsShuffle } from "react-icons/tb";
import { IoPlaySkipForward } from "react-icons/io5";
import { TbRepeatOnce } from "react-icons/tb"
import { IoVolumeMedium } from "react-icons/io5";

import VolumeBar from './Volume'
import Audio from './Audio'
import { useDispatch, useSelector } from 'react-redux';
import { updatePlaying, updateSong } from '../../actions';



const MusicControl = () => {
  let defaultSong = {
    artist: "David",
    title: "Trust the Process",
    image: james
  }
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [repeatOn, setRepeatOn] = useState(false);
  const [shuffleOn, setShuffleOn] = useState(false)
  const [volume, setVolume] = useState(30);
  const [songInfo, setSongInfo] = useState(defaultSong)

  const audioPlayer = useRef(); //reference to Audio components
  const progressBar = useRef();//reference to progress bar
  const playingAnimation = useRef(); //reference to JS animation 
  const volumeBar = useRef();

  const currentSong = useSelector(state => state.song)
  const isPlaying = useSelector(state => state.isPlaying)
  const songList = useSelector(state => state.songList)
  const songMetas = useSelector(state => state.songMetas)

  let dispatch = useDispatch();
  let currentSongIndex = songList.indexOf(currentSong);
 
  // This effect will run to update songmeta when song loads
  useEffect(() => {
      const seconds = Math.floor(audioPlayer.current.duration); //get total time from metadata
      setDuration(seconds);
      progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])

  // This effect will run when the current song changes
  useEffect(() => {
    autoPlay()
    getMetas()
  }, [currentSong])

  //This effect will run when shuffle status changes
  useEffect(() => {
    if(shuffleOn){
      shuffleSongs()
    }
    else {
      unshuffle()
    }
  }, [shuffleOn])

  // This effects updates volume
  useEffect(() => {
      if(audioPlayer){
        audioPlayer.current.volume = volume / 100;
        volumeBar.current.style.setProperty('--current-time-width', `${volume}%`)
      }
  }, [volume])

  // This formats the audio total seconds to time format
  function timeFormat(secs) {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }

  // This function gets song info to display in music control bar
  function getMetas(){
    songMetas.map(song => {
      if(song.track == currentSong){
        setSongInfo(song)
      }
    })
  }

  // This function will autoplay any song when it is clicked
  function autoPlay() {
      if(isPlaying === true) {
        audioPlayer.current.play();
        playingAnimation.current = requestAnimationFrame(whilePlaying)
      }
  }

  //This function plays/pause audio on the music control
  function togglePlay() {
    dispatch(updatePlaying())
    if(!isPlaying) {
      audioPlayer.current.play();
      playingAnimation.current = requestAnimationFrame(whilePlaying)
    }
    else{
      audioPlayer.current.pause();
      cancelAnimationFrame(playingAnimation.current);
    }
  }

//This function updates the now playing animation
  function whilePlaying() {
    progressBar.current.value = audioPlayer.current.currentTime
    songprogress();
    playingAnimation.current = requestAnimationFrame(whilePlaying)
  }
  //This is function update the current time of the song on click
  function updateProgress() {
    audioPlayer.current.currentTime = progressBar.current.value;
    songprogress();
  }
  // This function updates the current value and CSS progress bar
  function songprogress() {
    let progressPercent = progressBar.current.value / duration * 100;
    progressBar.current.style.setProperty('--current-time-width', `${progressPercent}%`)
    setCurrentTime(progressBar.current.value)
  }
  
  function resetPlayer() {
    setCurrentTime(0);
    progressBar.current.value = 0;
    progressBar.current.style.setProperty('--current-time-width', `0%`)
    cancelAnimationFrame(playingAnimation.current);
    if(repeatOn){
      autoPlay()
    }
    else if(currentSongIndex !==0 || currentSongIndex !== songList.length) {
      skipFoward()
    }
    else{
      dispatch(updatePlaying())
    }
  }
  // This fixes the NaN issue for getting song duration
  function songDuration() {
    if(isNaN(duration)){
      return timeFormat(0)
    }else {
      return timeFormat(duration)
    }
  }

  // tHIS FUNCTION SKIPS FORWARDS
  function skipFoward() {
    let nextSong = songList[currentSongIndex + 1];
    dispatch(updateSong(nextSong));
  }
  
  //THIS FUNCTION PLAYS PREVIOUS SONGS
  function skipBack() {
    let prevSong = songList[currentSongIndex - 1];
    dispatch(updateSong(prevSong));
  }

  // THIS FUNCTION REPEATS SONGS
  function repeatSong(){
    setRepeatOn(prevState => !prevState);
  }

  //THIS FUNCTION RETURNS RANDOM NUMBER USED TO SHUFFLE SONG ARRAY 
  function shuffleList(array){
    let currentIndex = array.length;
    let randomIndex;

    // While there remain elements to shuffle.
      while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  // THIS FUNCTION SHUFFLES SONGS
  function shuffleSongs(){
    let newSongArr = [...songList]
    shuffleList(newSongArr)
    dispatch(updateSong(newSongArr[0]));
  }

  //THIS FUNCTION  UNSHUFFLES THE SONGLIST 
  function unshuffle() {
    return songList
  }

  // THIS FUNCTION TOGGLES SHUFFLE ICONS
  function toggleShuffle(){
    setShuffleOn(prevState => !prevState)
  }

  // STYLES TO TOGGLE
  const styleShuffle = {
    background: shuffleOn ? 'rgba(250, 205, 102, .8)' : 'transparent',
    boxShadow: shuffleOn ? '0px 0px 3px 3px rgba(255, 255, 255, 0.3)' : 'none'
  }
  const styleRepeat = {
    background: repeatOn ? 'rgba(250, 205, 102, .8)' : 'transparent',
    boxShadow: repeatOn ? '0px 0px 3px 3px rgba(255, 255, 255, 0.3)' : 'none'
  }



  return (
    <div className='musiccontrol w-full	border-t-stone-700 h-32 bottom-0  fixed flex justify-between gap- items-center '>
      
      {/* <audio ref={audioPlayer} src={song} preload='metadata' onEnded={resetPlayer}></audio> */}
          <Audio 
            ref={audioPlayer}
            music={currentSong}
            handleEnded={() => {resetPlayer()}}
          />
          {/* title and thumbnail */}
          <div className="thumbnail md:w-1/4 flex justify-start items-center  gap-3">
            <div className=" rounded-lg">
             <img src={songInfo.image} height='50' className='img' alt="" />
            </div>
            <div className="title flex flex-col gap-1">
                <p className="font-semibold text-base	 text-white">{songInfo.title}</p>
                <p className=" text-xs font-light text-gray-400">{songInfo.artist}</p>
            </div>
          </div>
          {/* pause, play, forward & next slideBar*/}
          <div className='container flex justify-end md:justify-center flex-col gap-4 w-1/2 items-center'>
            <div className="controls flex items-center  gap-10 ">
              <button className='shuffle hidden md:block toggle-btn' style={styleShuffle}>
                <TbArrowsShuffle size={20} onClick={toggleShuffle} />
              </button>
              <button className='skipBack hidden md:block' onClick={skipBack}>
                <IoPlaySkipBack size={20} />
              </button>
              <button className='play flex' onClick={togglePlay}>
                { !isPlaying ? <FaPlay size={13}  /> : <FaPause size={13}/>}
              </button>
              <button className='skipFoward hidden md:block' onClick={skipFoward}>
                <IoPlaySkipForward size={20}  />
              </button>
              <button className=' repeat hidden md:block toggle-btn' style={styleRepeat}>
                <TbRepeatOnce size={20} onClick={repeatSong}/>
              </button>
            </div>
            {/* progress */}
            <div className='progress--container flex'>
              <p>{timeFormat(currentTime)}</p>
              <input 
                type="range" 
                className="progress--bar" 
                id="seek" 
                defaultValue="0" 
                min="0" 
                step="1" 
                ref={progressBar} 
                onChange={updateProgress}/>
              <p>{songDuration()}</p>
            </div>
          </div>

          {/* volume control */}
          <div className='volume hidden md:block md:w-1/4 justify-center items-center'>
            <div className='volumeControl flex items-center justify-center gap-3'>
              <button className='volume'>
                <IoVolumeMedium size={20} />
              </button>
              <div className='volume-slide w-full'> 
                <VolumeBar 
                  value={volume}
                  ref={volumeBar} 
                  handleChange={(e) => setVolume(e.target.value)} />
              </div>
            </div>
          </div>
    </div>
  )
}

export default MusicControl
