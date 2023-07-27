import React, {useState, useEffect, useRef} from 'react'
import {useParams} from 'react-router-dom'
import PlaylistMeta from './components/PlaylistMeta'
import Tracklist from './components/Tracklist'
import { useSelector, useDispatch } from 'react-redux'

import "./playlist.css"

import { motion } from 'framer-motion'
import { updateSong, updatePlaying, songList, songMetas } from '../../actions'
import { FaCommentsDollar } from 'react-icons/fa'


const Playlist = () => {

    const [playlistData, setPlaylistData] = useState([]);
    // const [list, setlist] = useState([]);
    const isPlaying = useSelector(state => state.isPlaying)
    let listUrl = [];
    let metaUrl = [];
    const dispatch = useDispatch();
    useEffect(() => {
        fetch('../musica-data.json',
        {
            headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json' 
            }
        })
        .then((res) => res.json())
        .then((data) => {
            setPlaylistData(data.playlist)
        })
        }, [])

        useEffect(() => {
             // This assigns the songlist for skip and prev functionality
                dispatch(songList(listUrl))
                dispatch(songMetas(metaUrl))
        }, [listUrl])
        const {id} = useParams();
        let background;
        //This function plays songs for each track
        function playTrack(track) {
            dispatch(updateSong(track));
            if(isPlaying === false){
                dispatch(updatePlaying())
            }
        }

        let playlistMeta = playlistData.map((data, index) => {
            if(data.id === parseInt(id)) {
                 background = {
                    background: `linear-gradient(0deg, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, .7) ), url(${data.playlistArt})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "top 230% center",
                }
              
                return  <PlaylistMeta 
                        key={index}
                        playlistCover={data.playlistArt}
                        title={data.title}
                        desc={data.desc}
                        totalSongs={data.totalSongs}
                        />
            }
            return null;
        })

        let trackList = playlistData.map(data => {
            if(data.id === parseInt(id)) {
                // data.map((song) => console.log(song.track))
                return data.songs.map((song, index) => {
                    return (
                        <Tracklist 
                            key={index}
                            coverArt={song.coverArt}
                            title={song.title}
                            artist={song.artist}
                            album={song.album}
                            duration={song.Length}
                            handleClick={() => {playTrack(song.track)}}
                        />
                    )
                })
            }
        })

        let songsUrl = playlistData.map(data => {
            if(data.id === parseInt(id)) {
                return data.songs.map(song => {
                   return listUrl.push(song.track)
                })
            }
        });
       
        let songMeta = playlistData.map(data => {
            if(data.id === parseInt(id)) {
                return data.songs.map(song => {
                    let currentSongInfo = {
                        track: song.track,
                        artist: song.artist,
                        title: song.title,
                        image: song.coverArt
                    }
                    return metaUrl.push(currentSongInfo)
                })
            }
        });
        

        const container = {
            hidden: { opacity: 0, top: 100 },
            visible: { opacity: 1, 
                top: 30, 
                transition: {
                    delay: 0.5,
                    staggerChildren: 1,
                    delayChildren: 2,
            }, },
        }

        return (
        <motion.div 
        className='playlist-container' 
        style={background}
        initial="hidden"
        animate="visible"
        variants={container}>
            {playlistMeta}
            <motion.div className='songs-container flex'>
                {trackList}
            </motion.div>
        </motion.div>
    )
}

export default Playlist