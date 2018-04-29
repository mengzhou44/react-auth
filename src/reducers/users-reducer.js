import * as types from '../actions/types';

export default (state = { data: [], error: '' }, action) => {
    switch (action.type) {
        case types.FETCH_USER_SUCCESS:
            return { data: action.payload, error: '' };
        case types.FETCH_USER_FAIL:
            return { data: [], error: action.payload };

        default:
            return state;
    }
}