import React, { createContext, useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

/**
 * GraphQL Queries
 */
export const useQueryAllPerformanceData = (): unknown => {
    const {
        allSanitySeason: { nodes: seasons },
        allSanityShow: { nodes: shows },
    } = useStaticQuery(graphql`
        query AllPerformancesQuery {
            allSanitySeason(filter: { doNotDisplay: { eq: false } }) {
                nodes {
                    title
                    tagline
                    slug {
                        current
                    }
                }
            }
            allSanityShow(
                filter: { toggles: { isHiddenFromWebsite: { eq: false } } }
            ) {
                nodes {
                    title
                    slug {
                        current
                    }
                    openDate
                    closeDate
                }
            }
        }
    `);

    return { seasons, shows };
};

// getCurrentSeason
// getNextSeason
// getPreviousSeason

// getCurrentShow
// getNextShow
// getPreviousShow

// getAllShowsThisSeason
// getOtherShowsThisSeason

/**
 * Context & Provider
 */
export const GlobalPerformanceContext = createContext(
    {} as GlobalPerformanceContextProps
);

export const GlobalPerformanceProvider: React.FC = ({ children }) => {
    const { seasons, shows } = useQueryAllPerformanceData();
    console.log(seasons, shows);
    const context = {
        seasons,
        shows,
    };

    return (
        <GlobalPerformanceContext.Provider value={context}>
            {children}
        </GlobalPerformanceContext.Provider>
    );
};

interface GlobalPerformanceContextProps {
    seasons: any;
    shows: any;
}

export const useGlobalPerformanceContext = (): GlobalPerformanceContextProps =>
    useContext(GlobalPerformanceContext);
