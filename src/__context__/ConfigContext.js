import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { useConfig } from '../__hooks__/useConfig';
// Use static query to get default data from prismic.

export const ConfigContext = createContext({});

export const ConfigProvider = ({ children }) => {
	const config = useConfig();

	return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>;
};

ConfigProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
