import React, {useEffect, useReducer, createContext, useMemo } from 'react';

export const StateContext = createContext();
const initialState = JSON.parse(localStorage.getItem('Salah_Timing')) || {location:{lat: 52.40, lon: 13.39}, method: 2};

const reducer = (state, action) => {
    switch (action.type) {
      case 'location':
        return {...state, location: {lat: action.payLoad.lat, lon: action.payLoad.lon}};
        case 'method':
            return {...state, method: action.payLoad};
        case 'calender':
            return {...state, calender: action.payLoad}
      
      default:
        throw new Error();
    }
  }

export const UserProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);
    window.addEventListener('beforeunload', ()=>{
    localStorage.setItem('Salah_Timing', JSON.stringify(state))
  })
  useEffect(() => {
    localStorage.setItem('Salah_Timing', JSON.stringify(state))
  }, [state])
  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
};


