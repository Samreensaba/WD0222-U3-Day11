const initialState = {
    favourites: []
}

export default function favouritesReducer(state = initialState, action){
    const{type, payload} = action

    switch(type){
        case 'ADD_TO_FAVOURITE':
        return{
            ...state,
            favourites:[state.favourites, payload]
        }
        case 'REMOVE_FROM_FAVOURITE':
            return{
                ...state,
                favourites:state.favourites.filter(company=> company !== payload)
            }
            default:
                return state
    }
}