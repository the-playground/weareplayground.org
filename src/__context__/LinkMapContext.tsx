import React, { createContext, useContext } from 'react';
import { useLinkMap } from '@hooks';

export const LinkMapContext = createContext({});

export const LinkMapProvider: React.FC = ({ children }) => {
    const links = useLinkMap();

    return (
        <LinkMapContext.Provider value={links}>
            {children}
        </LinkMapContext.Provider>
    );
};

export const useLinkMapContext = () => useContext(LinkMapContext);
