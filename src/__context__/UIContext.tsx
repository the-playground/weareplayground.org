import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useModal, UseModalReturnProps } from '@hooks';
import { Modal } from '@components/ui';

export const UIContext = React.createContext<UIContextProps>(
    {} as UIContextProps
);

/**
 * Handles all aspects of our application UI State. This gives us a central place to
 * get or update UI state from anywhere in our app.
 *
 * Includes our modal component which is intended to be dynamically hydrated
 * from anywhere in our app.
 */
export const UIProvider: React.FC = ({ children }) => {
    // Bring in state handlers
    const modal = useModal();

    // Build our state object
    const state: UIContextProps = {
        modal: {
            ...modal,
        },
    };

    return (
        <UIContext.Provider value={state}>
            {children}
            <AnimatePresence> {modal.isModalOpen && <Modal />}</AnimatePresence>
        </UIContext.Provider>
    );
};

export interface UIContextProps {
    modal: UseModalReturnProps;
}

/**
 * A saucy little thin wrapper for fetching and using our App Context
 */
export const useUIContext = () => React.useContext(UIContext);
