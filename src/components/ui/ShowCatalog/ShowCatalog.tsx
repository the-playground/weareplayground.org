import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './__styles';

import { ShowCard } from '../ShowCard/ShowCard';

// Sort shows by season.

export const ShowCatalog = ({ shows }) => (
    <Styled.ShowCatalog>
        {shows.map((show) => (
            <ShowCard key={show.node.title} show={show.node} />
        ))}
    </Styled.ShowCatalog>
);

/**
 * ----------
 * Prop Types
 * ----------
 */

ShowCatalog.propTypes = {
    shows: PropTypes.arrayOf(
        PropTypes.shape({
            node: PropTypes.shape({
                title: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired
    ).isRequired,
};
