import { useEffect, RefObject } from 'react';

/**
 * Detect a click outside a referenced component and handle the click accordingly.
 *
 * @param ref The object we are watching to see if a click outside of that object takes place
 * @param handler The event handler that should handle the click
 */
export const useOnClickOutside = (
    ref: RefObject<HTMLElement> | null,
    handler: Handler | null
) => {
    useEffect(() => {
        if (!ref || !handler) {
            return;
        }

        const listener = (event: HandledEvents) => {
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }
            handler(event);
        };

        // Listen for a click or touch interaction
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        // Runs on cleanup
        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [handler, ref]);
};

type Handler = (event: HandledEvents) => void;

type HandledEvents = MouseEvent | TouchEvent;
