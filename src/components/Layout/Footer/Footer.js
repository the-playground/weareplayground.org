import React from 'react';
<<<<<<< Updated upstream
import { Copyright } from './Copyright';

const Footer = () => (
	<footer>
		<Copyright />
	</footer>
=======
import * as Styled from './Footer.styles';
import { Copyright } from './Copyright';

const Footer = () => (
	<Styled.Footer>
		<Copyright />
	</Styled.Footer>
>>>>>>> Stashed changes
);

export default Footer;
