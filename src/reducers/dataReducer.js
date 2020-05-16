const initialState = {
    data: [],
    loading: false,
    error: false
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {...state, loading: false, error:false, data: action.payload}
        case 'FETCH_FAIL':
            return { ...state, loading:false, error:action.payload }
        case 'FETCH_START':
            return { ...state, loading: true, error: false }
        default:
            return state;
    }
}

export default dataReducer;