import React, { createContext, useContext } from 'react';
import { useConfig } from '../__hooks__/useConfig';
// Use static query to get config data from prismic.

export const ConfigContext = createContext({});

export const ConfigProvider: React.FC = ({ children }) => {
    const config = useConfig();

    return (
        <ConfigContext.Provider value={config}>
            {children}
        </ConfigContext.Provider>
    );
};

export const useConfigContext = () => useContext(ConfigContext);
