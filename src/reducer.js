export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: null,
    token: 'BQABg2Qxg0njAES7GkZFS01kVQAqV0XNoJljdcM48wpg_UDt5TmzRqNcTuJ8nsyDg_raJ2RRfn9cBgL33ROXdJ7eKOz1XHjSrivbt3kEM56e18o9wvbTMMYT5KsYU_IMcZjr-iT0p71M6lqCYzkJ5O3Dt6eyvgfpAV6m8HUf7frWrGUVM6KO',
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
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        // default is a catchall that returns the same state so the app doesn't break
        default:
            return state;
    }
}

export default reducer;