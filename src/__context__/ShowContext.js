import React, { createContext } from 'react';
import PropTypes from 'prop-types';
// Use static query to get default data from prismic.

const defaultValues = {
	currentShow: {},
	nextShow: {},
	currentSeason: {},
};

export const ShowContext = createContext(defaultValues);

export const ShowProvider = ({ children }) => {
	// All of the show and season logic for our application should be done here.
	const currentShow = {};
	const nextShow = {};
	const currentSeason = {};
	const nextSeason = {};

	return <ShowContext.Provider value={defaultValues}>{children}</ShowContext.Provider>;
};

ShowProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
