import { useEffect, RefObject } from 'react';

/**
 * Detect a click outside a referenced component and handle the click accordingly.
 *
 * @param ref The object we are watching to see if a click outside of that object takes place
 * @param callback The function to run if a click outside the ref element was detected
 */
export const useOnClickOutside = (
    ref: RefObject<HTMLElement> | null,
    callback: () => void
): void => {
    useEffect(() => {
        if (!ref || !callback) {
            return;
        }

        const listener = (event: HandledEvents) => {
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }
            callback();
        };

        // Listen for a click or touch interaction
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        // Runs on cleanup
        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [callback, ref]);
};

type HandledEvents = MouseEvent | TouchEvent;
