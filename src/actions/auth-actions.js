import * as types from './types';

export const signin = () => {
    return { type: types.SIGN_IN_SUCCCESS }
}

export const signout = () => {
    return { type: types.SIGN_OUT_SUCCCESS }
}