export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
}

/* 
    The reducer's primary job is to sit idly and listen for actions
    Action has type and [payload]
*/
const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            // New state
            return {
                ...state,
                user: action.user
            }
        // default is a catchall that returns the same state so the app doesn't break
        default:
            return state;
    }
}

export default reducer;