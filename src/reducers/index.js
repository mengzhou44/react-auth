import { combineReducers } from 'redux';

import AuthReducer from './auth-reducer';

import UsersReducer from './users-reducer';

export default combineReducers({
    auth: AuthReducer,
    users: UsersReducer
});