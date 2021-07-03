import styled from 'styled-components';
import { breakpoints, fonts, spacing } from '@web/ui/tokens';

const componentBreakpoint = breakpoints.s;

export const GeneralNewsSubscribe = styled.div`
    form {
        display: block;
        ${componentBreakpoint} {
            display: flex;
            flex-direction: row;
        }
    }

    form > div {
        flex: 1;
    }

    form input,
    form button {
        align-items: center;
        ${componentBreakpoint} {
            height: 55px;
        }
    }

    form input {
        width: 100%;
        ${componentBreakpoint} {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }
    }

    form button {
        margin-left: auto;
        margin-right: auto;
        margin-top: ${spacing.component.m};
        max-width: 175px;

        ${componentBreakpoint} {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            margin-top: 0px;
            flex: 0 0 175px;
        }
    }

    .errors {
        text-align: center;
        margin-top: ${spacing.component.m};
        ${componentBreakpoint} {
            text-align: left;
        }
    }

    .response-info {
        margin-top: ${spacing.component.m};
    }

    .response-info a {
        ${fonts.bodyBold}
        text-decoration: underline;
    }
`;

export const SubscriptionSuccess = styled.div`
    .success-title {
        margin-bottom: ${spacing.component.m};
    }
`;
