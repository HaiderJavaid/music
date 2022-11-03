
const songList = (state = [] , action) => {
    switch(action.type){
        case 'SONGLIST':
            return action.payload
        default:
            return state
    }
}

export default songList