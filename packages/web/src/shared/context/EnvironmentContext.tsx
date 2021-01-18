import React, { createContext, useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const EnvironmentContext = createContext({} as Environment);

export const EnvironmentProvider: React.FC = ({ children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    appVersion
                    prodURL
                    deployURL
                    environment
                    deployContext
                    deployID
                    commitRef
                    prevCommitRef
                    isDev
                    isProd
                }
            }
        }
    `);

    const queryData = data?.site?.siteMetadata;

    const config = {
        app: {
            version: queryData.appVersion,
            deployURL: queryData.deployURL,
            prodURL: queryData.prodURL,
        },
        environment: {
            context: queryData.environment,
            isDev: queryData.isDev,
            isProd: queryData.isProd,
        },
        release: {
            id: queryData.commitRef,
            prevID: queryData.prevCommitRef,
        },
        deploy: {
            context: queryData.deployContext,
            id: queryData.deployID,
        },
    };

    return (
        <EnvironmentContext.Provider value={config}>
            {children}
        </EnvironmentContext.Provider>
    );
};

export const useEnvironmentContext = (): Environment =>
    useContext(EnvironmentContext);

export interface Environment {
    app: {
        version: string;
        deployURL: string;
        prodURL: string;
    };
    environment: {
        context: string;
        isDev: boolean;
        isProd: boolean;
        // isNetlifyPreview: boolean;
        // isStaging: boolean;
    };
    release: {
        id: string;
        prevID: string;
    };
    deploy: {
        context: string;
        id: string;
    };
}
