const initialState = {
    faviouriteCompanies: []
}

export default mainReducer(state = initialState, action){
    const{type, payload} = action

    switch(type){
        case 'ADD_TO_FAVOURITE':
        return{
            ...state,
            faviouriteCompanies:[state.faviouriteCompanies, payload]
        }
        case 'REMOVE_FROM_FAVOURITE':
            return{
                ...state,
                faviouriteCompanies:state.faviouriteCompanies.filter(comanies=> company != payload)
            }
            default:
                return state
    }
}