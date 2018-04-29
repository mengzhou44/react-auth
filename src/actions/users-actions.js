import axios from 'axios';
import * as types from './types';

export function fetchUsers() {

    return function (dispatch) {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res.data);
                dispatch({
                    type: types.FETCH_USER_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({ type: types.FETCH_USER_FAIL, payload: 'Error fetching users ...' });
            })
    }

}