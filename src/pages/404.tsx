import * as React from 'react';
import { Container } from '@nerve/core/components/layout';
import { Layout } from '@nerve/domains/app';

const NoPageFound: React.FC = () => {
    return (
        <Layout noHeader noFooter>
            <Container>404 Error</Container>
        </Layout>
    );
};

export default NoPageFound;
