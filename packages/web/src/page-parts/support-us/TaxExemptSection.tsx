import React from 'react';
import styled from 'styled-components';

import {
    BodyText,
    Container,
    Divider,
    Heading,
    Logo,
    Paper,
    Section,
} from '@web/core/components';

import { breakpoints, grid, spacing } from '@web/ui/tokens';

const StyledTaxExemptSection = styled(Section)`
    padding: ${spacing.layout.m} 0;

    .card {
        padding: ${spacing.component.l};
    }

    .pre {
        text-align: center;
        margin-bottom: ${spacing.component.l};
    }

    .heading {
        margin-bottom: ${spacing.component.m};
    }

    .federal-id {
        margin-top: ${spacing.component.xs};
    }
`;

export const TaxExemptSection = (): JSX.Element => {
    return (
        <>
            <Divider color="paperLight" />
            <StyledTaxExemptSection bgColor="paperDark">
                <Container maxWidth="xs">
                    <BodyText
                        color="medium"
                        size="m"
                        weight="bold"
                        className="pre"
                    >
                        Don't worry. We're legit.
                    </BodyText>
                    <Paper
                        bgColor="paperDark"
                        borderColor="paper"
                        className="card"
                        variant="outlined"
                    >
                        <Logo type="BrandMark" color="light" size="xs" />
                        <BodyText
                            color="light"
                            size="m"
                            weight="bold"
                            as="h4"
                            className="heading"
                        >
                            The Nerve Theatre is a registered 501(c)(3)
                            organization.
                        </BodyText>
                        <BodyText color="light" size="m">
                            Your contribution will qualify as a charitable
                            contribution under Internal Revenue Code.
                        </BodyText>
                        <BodyText
                            color="medium"
                            size="m"
                            className="federal-id"
                        >
                            The Nerve's Federal ID number is: 47-1626207
                        </BodyText>
                    </Paper>
                </Container>
            </StyledTaxExemptSection>
        </>
    );
};
