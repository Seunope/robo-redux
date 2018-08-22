import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROOTS_PENDING,
    REQUEST_ROOTS_SUCCESS,
    REQUEST_ROOTS_FAILED
} from './constants'

const initialStateSearch ={
    searchField: ''
}

export const searchRobots = (state=initialStateSearch, action ={} ) =>{
    switch(action.type){
        case CHANGE_SEARCH_FIELD: 
            return Object.assign({}, state, {searchField:action.payload})
        default:
            return state;
    }
}

const initialStateRobots ={
    isPending: false,
    robots:[],
    error: ''
}

export const requestRobots = (state = initialStateRobots, action={}) =>{
    switch(action.type){
        case REQUEST_ROOTS_PENDING:
            return Object.assign({}, state, {isPending: true})
        case REQUEST_ROOTS_SUCCESS :
            return Object.assign({}, state, {robots : action.payload, isPending:false})
        case REQUEST_ROOTS_FAILED  :
            return Object.assign({}, state, {error : action.payload, isPending:false })
        default:
            return state;
    }
}