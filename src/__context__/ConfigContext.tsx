import React, { createContext, useContext } from 'react';
import { useQueryConfig } from '@hooks';
// Use static query to get config data from prismic.

export const ConfigContext = createContext({});

export const ConfigProvider: React.FC = ({ children }) => {
    const config = useQueryConfig();

    return (
        <ConfigContext.Provider value={config}>
            {children}
        </ConfigContext.Provider>
    );
};

export const useConfigContext = () => useContext(ConfigContext);
