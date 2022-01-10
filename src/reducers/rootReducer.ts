import { combineReducers } from 'redux';

import { rickReducer } from './rickReducer';

export const rootReducer = combineReducers({
    rickReducer: rickReducer
})

