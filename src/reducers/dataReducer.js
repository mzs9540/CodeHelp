const dataReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return action.payload;
        default:
            return state;
    }
}

export default dataReducer;