import song from '../assets/powerful-beat.mp3'

const songReducer = (state = song , action) => {
    switch(action.type){
        case 'UPDATESONG':
            return action.payload
        default:
            return state
    }
}

export default songReducer