import * as React from 'react';
import { Layout, Container } from '@nerve/core/components/layout';

const NoPageFound: React.FC = () => {
    return (
        <Layout noHeader noFooter>
            <Container>404 Error</Container>
        </Layout>
    );
};

export default NoPageFound;
