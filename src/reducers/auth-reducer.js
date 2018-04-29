
import * as types from '../actions/types';

const INITIAL_STATE = {
    authenticated: false
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SIGN_IN_SUCCCESS:
            return { authenticated: true };
        case types.SIGN_OUT_SUCCCESS:
            return { authenticated: false };
        default:
            return state;

    }
}