import Home from "./pages/home/Home";
import Album from "./pages/album/Album";
import Playlist from "./pages/playlist/Playlist";
import MusicControl from './mainComponents/musicControl/MusicControl'
// import Audio from './mainComponents/musicControl/Audio'

import './App.css'
import { useState} from "react";
// import { useSelector } from 'react-redux';

import Searchbar from "./mainComponents/searchbar/Searchbar";
import Sidebar from "./mainComponents/sidebar/Sidebar";

import { Routes, Route } from "react-router-dom";
import Collection from "./pages/myCollection/Collection";


function App() {

  const [collection, setCollection] = useState([])
 
  return (
      <div className="main">
      
        <Searchbar/>
        <Sidebar/>
        <MusicControl/>
        
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album" element={<Album />} />
        <Route path="/collection" element={<Collection />} />

        <Route path='/playlist/:id' element={<Playlist />}/>
        <Route path="/collection" element={<Collection />} />
        </Routes>
        
      </div>
  );
}

export default App;
