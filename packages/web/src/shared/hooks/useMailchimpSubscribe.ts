import { useState } from 'react';
import { useLocation } from '@reach/router';
import addToMailchimp, {
    MailchimpFields,
    MailchimpResponse,
} from 'gatsby-plugin-mailchimp';

import { getExternalReferrer } from '@nerve/shared/lib';

/**
 * A defined set of messages for communicating Mailchimp responses to users
 */
const messages = {
    error: {
        invalidEmail:
            "Hmmm... it doesn't look like this is a valid email address...",
        requiredEmail: 'An email address is required in order to subscribe.',
    },
    success: {
        default: {
            title: 'Sweet!',
            copy: 'Your signup was successful 🎉! Welcome to The Nerve.',
        },
    },
};

/**
 * A map available "Groups" users can be subscribed to in our Mailchimp account
 */
const groups = {
    GENERAL_NEWS: {
        name: 'General News Updates',
        inputName: 'group[33097][16]',
        inputID: '16',
    },
    AUDITIONS: {
        name: 'Auditions',
        inputName: 'group[33097][4]',
        inputID: '4',
    },
    CLASSES: {
        name: 'Classes',
        inputName: 'group[33097][8]',
        inputID: '8',
    },
};

export enum FIELDS {
    EMAIL = 'EMAIL',
    FIRST_NAME = 'FNAME',
    LAST_NAME = 'LNAME',
    EVENT_NAME = 'EVENT',
    SIGNUP_LOCATION = 'SIGNUPLOC',
    EXTERNAL_REFERRER = 'EXT_REF',
}

export const config = {
    messages,
    groups,
    FIELDS,
};

export const useMailchimpSubscribe = () => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState({} as MailchimpResponse);
    const { pathname } = useLocation();

    const subscribe: MailchimpSubscribeFn = async (email, listFields) => {
        setLoading(true);
        const results = await addToMailchimp(email, listFields);
        setResponse(results);
        setLoading(false);
    };

    return {
        config,
        loading,
        response,
        subscribe,
        currentPath: pathname,
        referrer: getExternalReferrer(),
    };
};

type MailchimpSubscribeFn = (
    email: string,
    listFields?: MailchimpFields
) => void;
