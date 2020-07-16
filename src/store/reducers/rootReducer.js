//import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';
//import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    //auth: authReducer,
    carreras: projectReducer,
    //form: formReducer
})

export default rootReducer;