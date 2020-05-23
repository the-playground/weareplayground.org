import React, { createContext, useContext } from 'react';

export const ShowContext = createContext({} as ShowContextProps);

export const ShowProvider: React.FC = ({ children }) => {
    // All of the show and season logic for our application should be done here.

    const context = {
        currentShow: {},
        nextShow: {},
    };

    return (
        <ShowContext.Provider value={context}>{children}</ShowContext.Provider>
    );
};

interface ShowContextProps {
    currentShow: any;
    nextShow: any;
}

export const useShowContext = useContext(ShowContext);
