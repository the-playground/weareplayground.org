import { useLayoutEffect } from 'react';

/**
 * When this hook is present, it prevents the user from scrolling. Perfect for
 * use-cases like a modal or popup.
 *
 * For Web: The `html` element must have overflow hidden applied. `body` doesn't work.
 * For Mobile: The `body` element must have overflow hidden applied. `html` doesn't work.
 *
 * @param freezeHandler A boolean flag that determines if scrolling should be frozen or not
 */
export const useScrollFreeze = (freezeHandler: boolean): void => {
    useLayoutEffect(() => {
        // Get original html & body overflow
        const originalHTMLOverflow = window.getComputedStyle(
            document.documentElement
        ).overflow;

        // Get original html & body overflow
        const originalBodyOverflow = window.getComputedStyle(document.body)
            .overflow;

        if (freezeHandler) {
            // Prevent scrolling on mount
            document.documentElement.style.overflow = `hidden`;
            document.body.style.overflow = `hidden`;
        }
        // Re-enable scrolling when component unmounts
        return () => {
            document.documentElement.style.overflow = originalHTMLOverflow;
            document.body.style.overflow = originalBodyOverflow;
        };
    }, [freezeHandler]);
};
