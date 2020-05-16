import axios from 'axios'

const fetchStart = () => {
    return {
        type: 'FETCH_START'
    }
}

const fetchFail = err => {
    return {
        type: 'FETCH_FAIL',
        payload: err
    }
}

const fetchSuccess = res => {
    return { type: 'FETCH_SUCCESS', payload: res }
}

export const fetchData = (values) => {
    return async dispatch => {
        dispatch(fetchStart);
        try {
            const res = await axios.post('url link https//:www.example.com',
                {
                    accessToken:'provide access Token here',
                    request:{
                        data:[
                            {
                                Id: values.Id,
                                CaseNumber: values.CaseNumber,
                                Case_Description: values.Case_Description,
                                ClosedDate: values.ClosedDate,
                                CreatedDate: values.CreatedDate,
                            }
                        ],
                        ignore_out_key: ['Id', 'CaseNumber']
                    }
                },
                {headers: 'pass headers here if any'})
            dispatch(fetchSuccess(res.data))
        } catch (err) {
            dispatch(fetchFail(err))
        }
    }
}
