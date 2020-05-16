import { combineReducers } from "redux";
import dataReducer from './dataReducer';
import { reducer as formReducer } from "redux-form";


export default combineReducers({
    data: dataReducer,
    form: formReducer,
});