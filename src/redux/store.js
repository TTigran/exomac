

function reducer(state = { data: "" }, action) {
    console.log(state, "------->")
    switch (action.type) {
        case "FETCH_DATA":
            return {
                ...state,
                ...action.data
            };
        case "POST_DATA_FOR_AUTHENTICATION":
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
}

export default reducer;