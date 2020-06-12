import React from 'react';
import { BodyText, Heading } from '@components/foundations';
import { Layout } from '@components/layout';

// import { TextLink, Button } from '@components/actions';

const StyleguidePage: React.FC = () => (
    <Layout noHeader noFooter>
        {/* Body Text Regular */}
        <BodyText size="s" color="dark">
            Small body text
        </BodyText>
        <BodyText size="m" color="dark">
            Medium body text
        </BodyText>
        <BodyText size="l" color="dark">
            Large body text
        </BodyText>
        <BodyText size="xl" color="dark">
            Extra Large body text
        </BodyText>

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
        <Heading size="xl" tag="h3" color="dark">
            Extra Large Standard Heading
        </Heading>

        {/* <div
            style={{
                background: `black`,
                padding: `24px`,
                marginBottom: `48px`,
            }}
        >
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
        </Button> */}
    </Layout>
);

export default StyleguidePage;
