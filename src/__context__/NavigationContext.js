import * as React from 'react';
// Use static query to get default data from prismic.

const defaultValues = {
    isCartOpen: false,
    isModalOpen: false,
    isMobileNavOpen: false,
    isDesktopDropdownOpen: false,
    isAuditionActive: false,
};

export const NavigationContext = React.createContext(defaultValues);

export const NavigationProvider = ({ children }) => (
    <NavigationContext.Provider value={defaultValues}>{children}</NavigationContext.Provider>
);
