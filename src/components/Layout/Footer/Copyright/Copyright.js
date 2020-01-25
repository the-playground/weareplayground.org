import React from 'react';
<<<<<<< Updated upstream
import moment from 'moment';
import { BodyText, BodyBold } from '../../../../_foundations/typography';
=======
import { BodyText, BodyBold } from '../../../_foundations/typography';
>>>>>>> Stashed changes

const Copyright = () => {
	const currentYear = new Date().getFullYear();

<<<<<<< Updated upstream
	return (
		<BodyText size="s">Copyright &copy; {currentYear}. The Playground Theatre</BodyText>;
	)
=======
	return <BodyText size="s">Copyright &copy; {currentYear}. The Playground Theatre</BodyText>;
>>>>>>> Stashed changes
};

export default Copyright;
