import Home from "./pages/home/Home";
import Album from "./pages/album/Album";
import Playlist from "./pages/playlist/Playlist";
import './App.css'


import Searchbar from "./mainComponents/searchbar/Searchbar";
import Sidebar from "./mainComponents/sidebar/Sidebar";

import { Routes, Route } from "react-router-dom";
import Collection from "./pages/myCollection/Collection";

function App() {
  return (
    <div className="main">
      
      <Searchbar/>
      <Sidebar/>
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/album" element={<Album />} />
      <Route path="/collection" element={<Collection />} />

      <Route path='/playlist/:id' element={<Playlist />}/>
      </Routes>
      
    </div>
  );
}

export default App;
