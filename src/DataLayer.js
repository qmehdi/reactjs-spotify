import React,
{ createContext,
  useContext,
  useReducer }
from "react";

// Prepare the Data Layer
export const DataLayerContext = createContext();

// This is the one that wrapped the <App /> component in index.js
// children is the <App /> component, basically any component that's wrapped
export const DataLayer = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
)
