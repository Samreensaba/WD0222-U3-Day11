export const addToFav = (company)=>({
    type: 'ADD_TO_FAVOURITE',
    payload: company
})

export const removeFromFav = (company)=>({
    type: 'REMOVE_From_FAVOURITE',
    payload: company
})