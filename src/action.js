import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROOTS_PENDING,
    REQUEST_ROOTS_SUCCESS,
    REQUEST_ROOTS_FAILED
} from './constants'

export const setSearchField = (text) =>({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestRobots = () => (dispatch) => {
    dispatch({type: REQUEST_ROOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(data => dispatch({type:REQUEST_ROOTS_SUCCESS, payload: data}))
    .catch(error => dispatch({type: REQUEST_ROOTS_FAILED, payload: error}))
}