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
            return null;
    
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