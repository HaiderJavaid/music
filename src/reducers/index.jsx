import SongReducer from './CurrentSong';
import PlayingReducer from './Playing';
import songList from './SongList';
import songMetas from './SongMeta';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    isPlaying: PlayingReducer,
    song: SongReducer,
    songList: songList,
    songMetas: songMetas
})

export default allReducers;