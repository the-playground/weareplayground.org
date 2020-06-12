import React, { createContext, useContext } from 'react';
import { useQuerySiteConfig, SiteConfig } from '@hooks';
// Use static query to get config data from prismic.

export const ConfigContext = createContext({} as SiteConfig);

export const ConfigProvider: React.FC = ({ children }) => {
    const config = useQuerySiteConfig();

    return (
        <ConfigContext.Provider value={config}>
            {children}
        </ConfigContext.Provider>
    );
};

export const useConfigContext = () => useContext(ConfigContext);
