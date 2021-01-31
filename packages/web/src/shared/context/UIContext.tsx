import React, { createContext, useContext } from 'react';
import { Drawer, Modal } from '@nerve/core/components';
import {
    useDynamicContent,
    UseDynamicContentReturn,
    useToggle,
    UseToggleReturn,
} from '../hooks';

export const UIContext = createContext<UIContextProps>({} as UIContextProps);

/**
 * Handles all aspects of our application UI State. This gives us a central place to
 * get or update UI state from anywhere in our app.
 *
 * Includes our modal component which is intended to be dynamically hydrated
 * from anywhere in our app.
 */
export const UIProvider: React.FC = ({ children }) => {
    const overlay = useToggle();

    // Build our state object
    const state: UIContextProps = {
        overlay,
    };

    // Checks to see if a feedback type component is visible so we can male the necessary UI changes
    const overlayComponentVisible = overlay.isToggled;

    return (
        <UIContext.Provider value={state}>
            <div id="content-root" aria-hidden={overlayComponentVisible}>
                {children}
            </div>
            <div id="overlay-root" aria-hidden={!overlayComponentVisible} />
        </UIContext.Provider>
    );
};

export interface UIContextProps {
    overlay: UseToggleReturn;
}

/**
 * A saucy little thin wrapper for fetching and using our App Context
 */
export const useUIContext = (): UIContextProps => useContext(UIContext);
