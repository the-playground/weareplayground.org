import styled from 'styled-components';

export const Section = styled.section`
    ${props =>
        props.slant &&
        `
		:before{
			content: "";
			position: absolute;
			top: 0;
			width: 100%;
		}
  `}
`;
