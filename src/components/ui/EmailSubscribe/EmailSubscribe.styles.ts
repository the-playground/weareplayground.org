import styled from 'styled-components';
import { spacing } from '@tokens';

export const EmailSubscribe = styled.div`
    form {
        display: grid;
        grid-auto-flow: column;
        grid-column-gap: ${spacing.component.xxs};
    }

    form input {
        width: 100%;
    }

    .errors {
        margin-top: ${spacing.component.m};
    }
`;
