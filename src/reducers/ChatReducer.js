export default function reducer(state={
    messages: [],
    fetching: false,
    fetched: false,
    error: false
}, action) {
    switch(action.type) {
        case "FETCH_MESSAGES_START": {
            return { ...state, fetching: true };
            
        }
        case "FETCH_MESSAGES_RECEIVED": {
            return { ...state, fetching: false, fetched: true, messages: action.payload };
        }
        case "FETCH_MESSAGES_ERROR": {
            return { ...state, fetching: false, error: action.payload }
        }
    }
    return state;
}