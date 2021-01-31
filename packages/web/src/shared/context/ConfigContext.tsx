import React, { createContext, useContext } from 'react';

import {
    CompanyConfig,
    useCompanyConfig,
    SiteConfig,
    useSiteConfig,
    SEOConfig,
    useSEOConfig,
    LinkMapConfig,
    useLinkMapConfig,
} from '../hooks/configs';

export const ConfigContext = createContext({} as GlobalConfigs);

export const ConfigProvider: React.FC = ({ children }) => {
    const company = useCompanyConfig();
    const site = useSiteConfig();
    const seo = useSEOConfig();
    const links = useLinkMapConfig();

    return (
        <ConfigContext.Provider value={{ company, site, seo, links }}>
            {children}
        </ConfigContext.Provider>
    );
};

export const useConfigContext = (): GlobalConfigs => useContext(ConfigContext);

export interface GlobalConfigs {
    company: CompanyConfig;
    site: SiteConfig;
    seo: SEOConfig;
    links: LinkMapConfig;
}
