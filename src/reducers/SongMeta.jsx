
const songMetas = (state = [] , action) => {
    switch(action.type){
        case 'SONGMETA':
            return action.payload
        default:
            return state
    }
}

export default songMetas