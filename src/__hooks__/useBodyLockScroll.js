import { useLayoutEffect } from 'react';

/**
 *
 */

function useBodyScrollLock() {
	useLayoutEffect(() => {
		// Get original body overflow
		const originalOverflow = window.getComputedStyle(document.body).overflow;
		// Prevent scrolling on mount
		document.body.style.overflow = 'hidden';
		// Re-enable scrolling when component unmounts
		return () => (document.body.style.overflow = originalOverflow);
	}, []);
}

export { useBodyScrollLock };
