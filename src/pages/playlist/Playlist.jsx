import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import PlaylistMeta from './components/PlaylistMeta'
import Tracklist from './components/Tracklist'

import "./playlist.css"


const Playlist = () => {

    const [playlistData, setPlaylistData] = useState([])

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


        const {id} = useParams();
        let background;

        let playlistMeta = playlistData.map((data, index) => {
            if(id == data.id) {
                 background = {
                    background: `linear-gradient(180deg, rgba(29, 33, 35, 0.8) 0%, #1D2123 61.48%), url(${data.playlistArt})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "top 20% left 20%"
                }
              
                return  <PlaylistMeta 
                        key={index}
                        playlistCover={data.playlistArt}
                        title={data.title}
                        desc={data.desc}
                        totalSongs={data.totalSongs}
                        />
            }
        })
        let trackList = playlistData.map(data => {
            if(data.id == id) {
                return data.songs.map((song, index) => {
                    return (
                        <Tracklist 
                            key={index}
                            coverArt={song.coverArt}
                            title={song.title}
                            artist={song.artist}
                            album={song.album}
                            duration={song.Length}
                        />
                    )
                })
            }
        })
        return (
        <div className='playlist-container' style={background}>
            {playlistMeta}
            <div className='songs-container flex'>
                {trackList}
            </div>
        </div>
    )
}

export default Playlist