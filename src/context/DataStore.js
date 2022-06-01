import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

function DataStore({ initialstate, reducer, children }) {
  return (
    <StateContext.Provider value={useReducer(reducer, initialstate)}>
      {children}
    </StateContext.Provider>
  );
}

export const useStateContextvalue = () => useContext(StateContext);

export default DataStore;
