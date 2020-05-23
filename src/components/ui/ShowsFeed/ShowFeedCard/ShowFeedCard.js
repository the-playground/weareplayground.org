import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import * as Styled from './ShowFeedCard.styles';

const ShowFeedCard = ({ show }) => {
    // Make data simpler for us to work with by destructuring/ pulling out what we need.
    const { title, author, performances } = show;
    const { uid } = show._meta;

    // Handle the custom show-feed images
    // Handle setting fallback if needed
    // Handle desktop / tablet / mobile sources as needed
	const imageSource = show?.feed_imageSharp?.childImageSharp.fluid; // eslint-disable-line

    // Handle setting the current state of the show (inactive, active, in-rehearsal, now playing)
    // Consider useReducer?
    // const [status, SetStatus] = useState('inactive');

    return (
        <Styled.ShowFeedCard>
            <Styled.ShowFeedCardLink to={`/shows/${uid}`}>
                {imageSource ? <Img fluid={imageSource} alt="Hello" /> : ``}
            </Styled.ShowFeedCardLink>
        </Styled.ShowFeedCard>
    );
};

/**
 * ----------
 * Prop Types
 * ----------
 */

ShowFeedCard.propTypes = {
    show: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        performances: PropTypes.arrayOf(
            PropTypes.shape({
                datetime: PropTypes.string.isRequired,
            })
        ).isRequired,
        _meta: PropTypes.shape({
            uid: PropTypes.string.isRequired,
        }).isRequired,
        feed_image: PropTypes.shape({
            alt: PropTypes.string,
            url: PropTypes.string,
        }),
        feed_imageSharp: PropTypes.object,
    }),
};

export { ShowFeedCard };
