import React, {useState, useEffect} from 'react'
import './searchbar.css'

import logo from '../../assets/logo.svg'
// import search from '../../assets/search.svg'

const Searchbar = () => {

  const CLIENT_ID = "0fccf7f78e674c669f24b131d7cf6fda";
  const CLIENT_SECRET = "d07411b0543f4ba7ae734bb321987b6a";

  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [accessToken, setAccessToken] = useState("");
  const [isFocus, setisFocus] = useState(false)

  useEffect(() => {
    // API ACCESS TOKEN
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(res => res.json())
      .then(data => setAccessToken(data.access_token))
  }, [])

  // SEARCH FUNCTION
  async function search() {
      var artistParameters = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
        }
      }

      var searchRequest = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=track&market=NG&limit=7', artistParameters)
      .then(res => res.json())
      .then(data => {
          setSearchResult(data.tracks.items)
      })
  }
    //this function retrieves the artist name from the result
    //Too many mappings resulted to undefined hence this
      function artistName(index){
        let artistArr = searchResult.map(data => {
          return data.artists.map(nameInfo => {
            return nameInfo.name
          })
        })
        return artistArr[index].toString()
      }

    let finalResult = searchResult.map((data, index) => {
      return (
        <div className='search-result flex' key={index}>
                  <div className='flex'>
                      <img className='album--art' src={data.album.images[1].url} alt="hello" />
                  </div>
                  <div className='song-info flex'>
                    <p>{data.name}</p>
                    <p>{artistName(index)}</p>
                  </div>
              </div>
      )
    })

  return (
    <div>

    <div className='nav-bar'>
      <img  src={logo} alt='logo' className='logo'/>
      <div className='searchbar'>
        <input 
          className='input' 
          placeholder='Search artists' 
          type="text"
          onChange={(e) => {
            if(e.target.value.length < 1){
              setisFocus(prev => !prev);
            }else if(e.target.value){
              setisFocus(true)
            }
            setSearchInput(e.target.value)
            search()
          }}
          onClick={() => setisFocus(true)}>
        </input>
      </div>
    </div>
    {isFocus && 
          <div className='search-result-container'>
              {finalResult}
          </div>
        }
    </div>
  )
}

export default Searchbar