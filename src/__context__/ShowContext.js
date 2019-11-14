import React, { createContext } from 'react';
// Use static query to get default data from prismic.

const defaultValues = {
	currentShow: {},
	nextShow: {},
	currentSeason: {},
};

export const ShowContext = createContext(defaultValues);

export const ShowProvider = ({ children }) => <ShowContext.Provider value={defaultValues}>{children}</ShowContext.Provider>;
