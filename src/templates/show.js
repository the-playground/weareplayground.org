import React from 'react';
import { graphql } from 'gatsby';
import { Show } from '../components/Show';

const ShowTemplate = () => (
	// FIX data undefined... we will need a static query probably. This page has access to UID

	<Show />
);

// dynamic static query here from gatsby that uses the uid of the show

export default ShowTemplate;
