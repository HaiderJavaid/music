import Home from "./pages/home/Home";
import Album from "./pages/album/Album";
import './App.css'


import Searchbar from "./mainComponents/searchbar/Searchbar";
import Sidebar from "./mainComponents/sidebar/Sidebar";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main">
      
         <Searchbar/>
      <Sidebar/>
      
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album" element={<Album />} />
        </Routes>
      
    </div>
  );
}

export default App;
