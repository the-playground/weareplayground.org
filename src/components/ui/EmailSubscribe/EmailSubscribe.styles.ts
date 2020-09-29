import styled from 'styled-components';
import { spacing } from '@tokens';

export const EmailSubscribe = styled.div`
    form {
        display: flex;
    }

    form div {
        flex: 1;
    }

    form input,
    form button {
        align-items: center;
        height: 55px;
    }

    form input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        width: 100%;
    }

    form button {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        flex: 0 0 215px;
    }

    .errors {
        margin-top: ${spacing.component.m};
    }
`;

export const SubscriptionSuccess = styled.div``;
