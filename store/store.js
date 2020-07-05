import React, { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  data: [],
  content: [],
  recent: [],
  filters: {
      filtersVisible: true,
      filterByType: '',
      filterByTitle:'',
      filterByTag:'',
      sortBy:''
  }
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_ITEM_DATA':
      return { ...state, data: action.payload };
    case 'FETCH_CONTENT_DATA':
      return { ...state, content: action.payload };
    case 'FETCH_RECENT_DATA':
        return { ...state, recent: action.payload };
        
    case 'FILTER_BY_TYPE':
      return { ...state, filters: action.payload };
    default:
      return state;
  }
}

export default function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}