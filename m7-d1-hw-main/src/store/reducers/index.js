const initialState = {
    faviourites: []
}

export default function mainReducer(state = initialState, action){
    const{type, payload} = action

    switch(type){
        case 'ADD_TO_FAVOURITE':
        return{
            ...state,
            faviourites:[state.faviourites, payload]
        }
        case 'REMOVE_FROM_FAVOURITE':
            return{
                ...state,
                faviourites:state.faviourites.filter(company=> company !== payload)
            }
            default:
                return state
    }
}