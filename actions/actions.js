import fetch from 'isomorphic-unfetch';
import config from '../config';

/*
 * action types
 */

export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
* constants
*/
export const visibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ARTICLES: 'SHOW_ARTICLES',
    SHOW_BOOKS: 'SHOW_BOOKS' 
}

/*
 * action creators
 */
function requestData(data) {
    return {
        type: REQUEST_DATA,
        data
    }
}

function receiveData(json) {
    return {
        type: RECEIVE_DATA,
        json,
        shapedDate: shapeData(json),
        receivedAt: Date.now()
    }
}

function shapeData(json){
    console.log(json)
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
  }


export function fetchData() {
    return dispatch => {
      dispatch(requestData())
      return fetch(config.endpoint)
        .then(response => response.json())
        .then(json => dispatch(receiveData(json)))
    }
}
