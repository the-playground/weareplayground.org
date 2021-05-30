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
 * A map available of "Groups" users can be subscribed to in our Mailchimp account
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

/**
 * The set of defined fields (merge tags) available in our Mailchimp List.
 *
 * These are the fields that data will be attached to before it is sent
 * along in a subscription request.
 */
enum FIELDS {
    EMAIL = 'EMAIL',
    FIRST_NAME = 'FNAME',
    LAST_NAME = 'LNAME',
    EVENT_NAME = 'EVENT',
    SIGNUP_LOCATION = 'SIGNUPLOC',
    EXTERNAL_REFERRER = 'EXT_REF',
    CAMPAIGN = 'CAMPAIGN',
}

/**
 * A composed config that holds all of the form and group data that
 * we might need to reference throughout our app
 */
export const config = {
    messages,
    groups,
    FIELDS,
};

/**
 * A handy little hook that holds all of the functionality needed in order
 * to subscribe a user to our mailchimp list with support for custom
 * meta data.
 *
 * All available messaging, groups, and fields are returned from this hook,
 * along with loading state and response from Mailchimp.
 */
export const useMailchimpSubscribe = () => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState({} as MailchimpResponse);
    const { pathname, search } = useLocation();

    /**
     * Subscribe a specified user to our mailchimp list with the
     * requested metadata attached
     *
     ** The `addToMailchimp` function is provided by a Gatsby plugin. We can build our own at a later date if it makes sense.
     ** Note that we do not need to handle errors here since Mailchimp returns a 200 even on failed requests
     *
     * @param email The email of the user to subscribe
     * @param listFields The fields & field data to associate with this user subscribe event
     */
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
        queryParams: search,
    };
};

type MailchimpSubscribeFn = (
    email: string,
    listFields?: MailchimpFields
) => void;
