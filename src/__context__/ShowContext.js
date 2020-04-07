import React, { createContext } from 'react';
// Use static query to get default data from prismic?

const defaultValues = {
    currentShow: {},
    nextShow: {},
};

export const ShowContext = createContext(defaultValues);

export const ShowProvider = ({ children }) => {
    // All of the show and season logic for our application should be done here.
    const currentShow = {};
    const nextShow = {};

    return <ShowContext.Provider value={defaultValues}>{children}</ShowContext.Provider>;
};
