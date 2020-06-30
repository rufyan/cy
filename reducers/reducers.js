import { combineReducers } from 'redux'
import {
    REQUEST_DATA,
    RECEIVE_DATA
} from '../actions/actions'
import { VisibilityFilters } from '../actions/actions'

const initialState = {
    isFetching: false,
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    items: []
}

function data(state = initialState, action) {
    switch (action.type) {
        case REQUEST_DATA:
            return Object.assign({}, state, {
                isFetching: true,
                items: [
                    state.items,

                ]
            })
        case RECEIVE_DATA:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.data,
                lastUpdated: action.receivedAt
            })
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    data
})

export default rootReducer