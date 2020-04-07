import React, { createContext } from 'react';
// Use static query to get default data from prismic.

const defaultValues = {
    currentShow: {},
    nextSeason: {},
};

export const SeasonContext = createContext(defaultValues);

export const SeasonProvider = ({ children }) => <SeasonContext.Provider value={defaultValues}>{children}</SeasonContext.Provider>;
