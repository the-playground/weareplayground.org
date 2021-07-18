import React, { createContext, useContext } from 'react';

import {
    useQueryAllPerformanceData,
    useBuildPerformanceDataMap,
} from './src/hooks';
import { gettersFacade, GettersFacadeMethods } from './src/api';
import { GlobalShowMap, GlobalSeasonMap } from './src/types';

/**
 * Context & Provider
 */
export const GlobalPerformanceContext = createContext(
    {} as GlobalPerformanceContextProps
);

export const GlobalPerformanceProvider: React.FC = ({ children }) => {
    const { rawSeasonsData, rawShowsData } = useQueryAllPerformanceData();
    const { seasons, shows } = useBuildPerformanceDataMap(
        rawSeasonsData,
        rawShowsData
    );

    const context: GlobalPerformanceContextProps = {
        shows,
        seasons,
        get: gettersFacade(shows, seasons),
    };

    return (
        <GlobalPerformanceContext.Provider value={context}>
            {children}
        </GlobalPerformanceContext.Provider>
    );
};

interface GlobalPerformanceContextProps {
    seasons: GlobalSeasonMap;
    shows: GlobalShowMap;
    get: GettersFacadeMethods;
}

/**
 * A simple hook for accessing our context without having to import a bunch of stuff each time
 */
export const useGlobalPerformanceContext = (): GlobalPerformanceContextProps =>
    useContext(GlobalPerformanceContext);

export type {
    ShowMapEntry,
    SeasonMapEntry,
    GlobalSeasonMap,
    GlobalShowMap,
} from './src/types';
