import React from 'react';
import Img from 'gatsby-image';
import * as Styled from './ShowFeedCard.styles';

const ShowFeedCard = show => {
	const showData = show.node;
	console.log(showData);
	const imageSource = showData.feed_imageSharp.childImageSharp.fluid;
	console.log(imageSource);
	// return <Img key={index} fluid={imageSource} />;

	// show title
	// show author
	// show bg image sources
	// show run dates
	// group shows by season
	// show status (state)

	return <>Show</>;
};

export default ShowFeedCard;
