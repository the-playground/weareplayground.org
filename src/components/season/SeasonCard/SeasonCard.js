import React from 'react';
import PropTypes from 'prop-types';

import Img from 'gatsby-image';

import * as Styled from './SeasonCard.styles';

export const SeasonCard = ({ data }) => {
	const season = data;

	console.log(season);

	const { uid } = season._meta;

	// Handle the custom show-feed images
	// Handle setting fallback if needed
	// Handle desktop / tablet / mobile sources as needed
	// Get Img Alt
	const imageSource = season?.catalog_imageSharp?.childImageSharp.fluid; // eslint-disable-line

	// Handle setting the current season status/state (past, current, future)
	// This will need to be done based on the shows within the season itself
	// -- probably need to consider doing this at an Application/global level
	// Consider useReducer?
	// const [status, SetStatus] = useState('past');

	return (
		<Styled.SeasonCard>
			<Styled.SeasonCardLink to={`/seasons/${uid}`}>{imageSource ? <Img fluid={imageSource} alt="" /> : ''}</Styled.SeasonCardLink>
		</Styled.SeasonCard>
	);
};

/**
 * ----------
 * Prop Types
 * ----------
 */

SeasonCard.propTypes = {
	data: PropTypes.shape({
		_meta: PropTypes.shape({
			uid: PropTypes.string.isRequired,
		}).isRequired,
		title: PropTypes.string.isRequired,
		tagline: PropTypes.string,
		description: PropTypes.string,
		shows: PropTypes.arrayOf(
			PropTypes.shape({
				show: PropTypes.shape({
					performances: PropTypes.arrayOf(
						PropTypes.shape({
							datetime: PropTypes.string.isRequired,
						})
					).isRequired,
				}).isRequired,
			}).isRequired
		).isRequired,
		catalog_image: PropTypes.shape({
			alt: PropTypes.string,
			url: PropTypes.string,
		}),
		catalog_imageSharp: PropTypes.object,
	}),
};
