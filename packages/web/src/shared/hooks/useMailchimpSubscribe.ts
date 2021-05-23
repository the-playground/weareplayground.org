import { useState } from 'react';
import { useLocation } from '@reach/router';
import addToMailchimp, {
    MailchimpFields,
    MailchimpResponse,
} from 'gatsby-plugin-mailchimp';

import { getReferrer } from '@nerve/shared/lib';

const tagMap = {
    GENERAL_SUBSCRIBER: {
        groupName: 'group[33097][16]',
        groupID: '16',
    },
};

const getTagGroups = (groups: string[]) => {};

export const useMailchimpSubscribe = () => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState({} as MailchimpResponse);
    const { pathname } = useLocation();

    const subscribe: MailchimpSubscribeFn = async (email, listFields) => {
        const fields = {
            ...listFields,
        };

        setLoading(true);
        const results = await addToMailchimp(email, fields);
        setResponse(results);
        setLoading(false);
    };

    return {
        loading,
        response,
        subscribe,
        currentPath: pathname,
        referrer: getReferrer(),
    };
};

type MailchimpSubscribeFn = (
    email: string,
    listFields?: MailchimpFields
) => void;
