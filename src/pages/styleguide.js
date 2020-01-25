import React from 'react';
import { Layout } from '../components/Layout';

import { BodyText, BodyBold, BodyTitle, Heading, GrungeHeading } from '../components/_foundations/typography';
import { TextLink, Button } from '../components/_input';

const StyleguidePage = () => (
	<Layout noHeader noFooter>
		{/* Body Text Regular */}
		<BodyText size="s">Small body text</BodyText>
		<BodyText size="m">Medium body text</BodyText>
		<BodyText size="l">Large body text</BodyText>
		<BodyText size="xl">Extra Large body text</BodyText>

		{/* Body Text Bold */}
		<BodyBold size="s">Small bold body bext</BodyBold>
		<BodyBold size="m">Medium bold body bext</BodyBold>
		<BodyBold size="l">Large bold body text</BodyBold>
		<BodyBold size="xl">Extra Large bold body text</BodyBold>

		{/* Body Title */}
		<BodyTitle size="s">Small Body Title</BodyTitle>
		<BodyTitle size="m">Medium Body Title</BodyTitle>
		<BodyTitle size="l">Large Body Title</BodyTitle>

		{/* Standard Heading */}
		<Heading size="s" tag="h1">
			Small Standard Heading
		</Heading>
		<Heading size="m" tag="h2">
			Medium Standard Heading
		</Heading>
		<Heading size="l" tag="h3">
			Large Standard Heading
		</Heading>
		<Heading size="xl" tag="h3">
			Extra Large Standard Heading
		</Heading>

		{/* Grunge Heading */}
		<GrungeHeading size="s" tag="h1">
			Small Grunge Heading
		</GrungeHeading>
		<GrungeHeading size="m" tag="h2">
			Medium Grunge Heading
		</GrungeHeading>
		<GrungeHeading size="l" tag="h2">
			Extra Large Grunge Heading
		</GrungeHeading>

		<div style={{ background: 'black', padding: '24px', marginBottom: '48px' }}>
			<Button variant="primary">Check out the show</Button>
			<Button variant="primary" size="s">
				Check out the show
			</Button>
			<Button variant="tertiary">Check out the show</Button>
			<Button variant="tertiary" size="s">
				Check out the show
			</Button>
		</div>
		<Button variant="secondary">Check out the show</Button>
		<Button variant="secondary" size="s">
			Check out the show
		</Button>
		<Button variant="tertiary">Check out the show</Button>
		<Button variant="tertiary" size="s">
			Check out the show
		</Button>
	</Layout>
);

export default StyleguidePage;
