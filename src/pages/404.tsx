import * as React from 'react';
import styled from 'styled-components';
import { Layout, Container } from '@components/layout';

const NoPageFound: React.FC = () => {
    return (
        <Layout noHeader noFooter>
            <Container>404 Error</Container>
        </Layout>
    );
};

export default NoPageFound;
