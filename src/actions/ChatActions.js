export function fetchMessages() {
    return function(dispatch) {
        dispatch( { type: "FETCH_MESSAGES_START" } )
        console.log("Fetching messages...");
        dispatch( { type: "FETCH_MESSAGES_RECEIVED" , payload: [
            {
                id: "this is the id",
                author: "this is the id of the author user",
                message: "this is the message",
                timestamp: "this is the timestamp of the message"
            }
        ] })

    }
} 