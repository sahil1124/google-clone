import React, { createContext, useContext, useReducer } from 'react'

//preparing the data layer
export const StateContext = createContext()


//reducer is a clever function that listen the change made by user
export const StateProvider = ({ reducer, initalState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initalState)}>
        {children}
    </StateContext.Provider>
)


//hook which is allow us to pull data from datalayer
export const useStateValue = () => useContext(StateContext)