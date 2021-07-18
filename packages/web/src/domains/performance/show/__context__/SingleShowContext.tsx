import React, { createContext, useContext } from 'react';
import { useGlobalPerformanceContext, ShowMapEntry } from '@web/shared/context';
import { useShowStatus } from '../__hooks__';

export const SingleShowContext = createContext({} as SingleShowContextProps);

export const SingleShowProvider: React.FC<SingleShowProviderProps> = ({
    slug,
    children,
}) => {
    const { get } = useGlobalPerformanceContext();
    const [next, previous] = get.showNeighbors(slug);
    // const {status} = useShowStatus()

    // All of the show and season logic for our application should be done here.

    const context: SingleShowContextProps = {
        current: get.show(slug),
        // status,
        next: next(),
        previous: previous(),
    };

    return (
        <SingleShowContext.Provider value={context}>
            {children}
        </SingleShowContext.Provider>
    );
};

interface SingleShowProviderProps {
    slug: string;
}

interface SingleShowContextProps {
    current: ShowMapEntry | undefined;
    status: any;
    next: ShowMapEntry | undefined;
    previous: ShowMapEntry | undefined;
}

export const useShowContext = (): SingleShowContextProps =>
    useContext(SingleShowContext);
