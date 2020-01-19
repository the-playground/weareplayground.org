import React from 'react';
import moment from 'moment';
import { BodyText, BodyBold } from '../../../../_foundations/typography';

const Copyright = () => {
	const currentYear = new Date().getFullYear();

	return (
		<BodyText size="s">Copyright &copy; {currentYear}. The Playground Theatre</BodyText>;
	)
};

export default Copyright;
