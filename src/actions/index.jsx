export const updateSong = (song = null) => {
    return {
        type: 'UPDATESONG',
        payload: song
    }
}

export const updatePlaying = () => {
    return {
        type: 'ISPLAYING'
    }
}

export const songList = (songList) => {
    return {
        type: 'SONGLIST',
        payload: songList
    }
}

export const songMetas = (songMeta) => {
    return {
        type: 'SONGMETA',
        payload: songMeta
    }
}