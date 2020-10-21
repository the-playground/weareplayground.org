import React, { createContext, useContext } from 'react';

export const UIContext = createContext<UIContextProps>({} as UIContextProps);

/**
 * Handles all aspects of our application UI State. This gives us a central place to
 * get or update UI state from anywhere in our app.
 *
 * Includes our modal component which is intended to be dynamically hydrated
 * from anywhere in our app.
 */
export const UIProvider: React.FC = ({ children }) => {
    // Bring in state handlers

    // Build our state object
    const state: UIContextProps = {};

    return <UIContext.Provider value={state}>{children}</UIContext.Provider>;
};

export interface UIContextProps {}

/**
 * A saucy little thin wrapper for fetching and using our App Context
 */
export const useUIContext = (): UIContextProps => useContext(UIContext);
