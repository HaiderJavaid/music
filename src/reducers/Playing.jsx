
const playingReducer = (state = false, action) => {
    switch(action.type){
        case 'ISPLAYING':
            return !state
        default:
            return state
    }
}

export default playingReducer