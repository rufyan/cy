import React, { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  items: [],
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
    case 'FETCH_DATA':
      return { ...state, items: action.payload };
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