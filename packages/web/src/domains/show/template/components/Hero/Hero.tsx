import React from 'react';

import { BodyText, Container, Heading } from '@nerve/core/components';
import { useCurrentURL } from '@nerve/shared/hooks';
import * as styled from './Hero.styles';

export const Hero: React.FC<any> = ({ title, author, statusBar }) => {
    return (
        <styled.Hero>
            <Container className="container">
                {title}
                by {author}
            </Container>
            <div className="status">{statusBar}</div>
        </styled.Hero>
    );
};
