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

export const fetchDes = des => {
    return async dispatch => {
        dispatch(fetchStart());
        const res = await axios.post('url',
            {
                accessToken:'provide access Token here',
                request:{
                    data:[
                        {
                            Case_Description: des['Case_Description']
                        }
                    ]
                }
            }
            )
        dispatch(fetchSuccess(res.data))
    }
}

const fetchDesCase = (response) => {
    return async dispatch => {
        const res = await axios.post('enter url here',
            {
                accessToken:'provide access Token here',
                request:{
                    data:[
                        {
                            CaseNumber: response[0]['CaseNumber'],
                            Case_Description: response[0]['Case_Description__c'],
                        }
                    ]
                }
            });
        dispatch(fetchSuccess(res.data));
    }
}

export const fetchData = (values) => {
    return async dispatch => {
        dispatch(fetchStart());
        try {
            const url = 'http://127.0.0.1:5000/api/v1/serviceconnect/data'
            const response = await axios.get(url, {
                params: {
                    CaseNumber: values['CaseNumber']
                }
            })
            console.log(response);
            dispatch(fetchDesCase(response.data));
        } catch (err) {
            dispatch(fetchFail(err))
        }
    }
}
