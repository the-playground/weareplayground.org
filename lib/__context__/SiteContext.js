import React, { createContext } from 'react'
// Use static query to get default data from prismic.

const defaultValues = {
	globalNotice: {},
	hasGlobalNotice: false,
	isCartOpen: false,
	isMobileNavOpen: false,
	isDesktopDropdownOpen: false,
	isAuditionActive: false,
}

export const SiteContext = createContext(defaultValues);

export const SiteProvider = ({children}) => {

	return (

		<SiteContext.Provider value={defaultValues}>
			{children}
		</SiteContext.Provider>

	)

}
