import { useState } from 'react';

// TODO: Handle setting aria attributes on content and portal root.
export const useOverlay = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen((prevState) => !prevState);

    return { isOpen, setIsOpen, toggle };
};

export type UseOverlayReturn = ReturnType<typeof useOverlay>;
