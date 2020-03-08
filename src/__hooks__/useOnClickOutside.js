import { useEffect } from 'react';

/**
 *
 * @param {NodeModule} ref
 * @param {CallableFunction} clickOutsideHandler
 */
function useOnClickOutside(ref, clickOutsideHandler) {
    useEffect(() => {
        const listener = event => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            clickOutsideHandler();
        };

        // Listen for a click or touch interaction
        document.addEventListener(`mousedown`, listener);
        document.addEventListener(`touchstart`, listener);

        // Runs on cleanup
        return () => {
            document.removeEventListener(`mousedown`, listener);
            document.removeEventListener(`touchstart`, listener);
        };
    }, [clickOutsideHandler, ref]);
}

export { useOnClickOutside };
