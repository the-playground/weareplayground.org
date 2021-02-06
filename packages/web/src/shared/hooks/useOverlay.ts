import { useState } from 'react';

// TODO: Handle setting aria attributes on content and portal root.
export const useOverlay = (): UseOverlayReturn => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen((prevState) => !prevState);

    return [isOpen, setIsOpen, toggle];
};

export type UseOverlayReturn = [
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    toggle: () => void
];
