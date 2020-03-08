import React, { createContext } from 'react';
import PropTypes from 'prop-types';
// Use static query to get default data from prismic.

const defaultValues = {
    globalNotice: {},
    hasGlobalNotice: false,
    isCartOpen: false,
    isModalOpen: false,
    isMobileNavOpen: false,
    isDesktopDropdownOpen: false,
    isAuditionActive: false,
};

export const SiteContext = createContext(defaultValues);

export const SiteProvider = ({ children }) => <SiteContext.Provider value={defaultValues}>{children}</SiteContext.Provider>;

SiteProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
