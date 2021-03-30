import { createContext, useContext } from 'react';

import {
    ICompanyConfig,
    ISiteConfig,
    ISEOConfig,
    ILinkMapConfig,
} from './configs';

export const ConfigContext = createContext({} as IGlobalConfigs);

export const ConfigProvider: React.FC<IGlobalConfigs> = ({
    children,
    configs,
}) => {
    return (
        <ConfigContext.Provider value={{ configs }}>
            {children}
        </ConfigContext.Provider>
    );
};

export const useConfigContext = (): IGlobalConfigs => useContext(ConfigContext);

export interface IGlobalConfigs {
    configs: {
        company: ICompanyConfig;
        site: ISiteConfig;
        seo: ISEOConfig;
        links: ILinkMapConfig;
    };
}

export {
    companyConfigQuery,
    linkMapConfigQuery,
    buildLinkMapConfig,
    siteConfigQuery,
    seoConfigQuery,
} from './configs';
