import React, { createContext, useContext } from 'react';
import { Drawer, Modal } from '@nerve/core/components';
import { useDynamicContent, UseDynamicContentReturn } from '../hooks';

export const UIContext = createContext<UIContextProps>({} as UIContextProps);

/**
 * Handles all aspects of our application UI State. This gives us a central place to
 * get or update UI state from anywhere in our app.
 *
 * Includes our modal component which is intended to be dynamically hydrated
 * from anywhere in our app.
 */
export const UIProvider: React.FC = ({ children }) => {
    // Bring in state handlers
    const modal = useDynamicContent();
    const drawer = useDynamicContent();

    // Build our state object
    const state: UIContextProps = {
        modal,
        drawer,
    };

    // Checks to see if a feedback type component is visible so we can male the necessary UI changes
    const feedbackComponentVisible = modal.isOpen || drawer.isOpen;

    return (
        <UIContext.Provider value={state}>
            <div id="content-root" aria-hidden={feedbackComponentVisible}>
                {children}
            </div>
            {modal.isOpen && <Modal />}
            {drawer.isOpen && <Drawer />}
        </UIContext.Provider>
    );
};

export interface UIContextProps {
    modal: UseDynamicContentReturn;
    drawer: UseDynamicContentReturn;
}

/**
 * A saucy little thin wrapper for fetching and using our App Context
 */
export const useUIContext = (): UIContextProps => useContext(UIContext);
