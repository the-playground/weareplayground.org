// Inspo https://deliciousbrains.com/
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import addToMailchimp, { MailchimpResponse } from 'gatsby-plugin-mailchimp';
import { useLocation } from '@reach/router';

import { emailRegexPattern, getReferrer } from '@nerve/shared/lib';

import { BodyText, FillButton, Heading, Input } from '@nerve/core/components';

import { EmailSubscribeProps } from './EmailSubscribe.d';
import * as styled from './EmailSubscribe.styles';

export const EmailSubscribe: React.FC<EmailSubscribeProps> = () => {
    // Form Data handlers
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UseFormInputs>();

    // Form UI state handlers
    const [loading, setLoading] = useState(false);

    // Email Subscription state handlers
    const [subscription, setSubscription] = useState({} as MailchimpResponse);

    const { pathname } = useLocation();

    // The name of the form
    const formName = 'subscribe';

    /**
     * Handle subscribing users to an email service on submit
     *
     * @param data -The data from the submitted form
     */
    const onSubmit = async (data: UseFormInputs) => {
        setLoading(true);
        const results = await addToMailchimp(data.email, {
            SIGNUPLOC: data.signupLocation,
            REFERRER: data.referrer,
            'group[33097][16]': '16',
        });

        setSubscription(results);
        setLoading(false);
    };

    return (
        <>
            {subscription.result === 'success' ? (
                <styled.SubscriptionSuccess>
                    <Heading
                        as="h3"
                        color="light"
                        size="xs"
                        className="success-title"
                    >
                        Sweet!
                    </Heading>
                    <BodyText color="light" size="m" className="success-copy">
                        Your signup was successful 🎉! Welcome to The Nerve.
                    </BodyText>
                </styled.SubscriptionSuccess>
            ) : (
                <styled.EmailSubscribe>
                    <form name={formName} onSubmit={handleSubmit(onSubmit)}>
                        {/* Hidden field required by Netlify */}
                        <Input
                            color="light"
                            type="text"
                            placeholder="your email address"
                            {...register('email', {
                                required:
                                    'An email address is required in order to subscribe.',
                                pattern: {
                                    value: emailRegexPattern,
                                    message:
                                        "Hmmm... it doesn't look like this is a valid email address.",
                                },
                            })}
                        />

                        {/* Automatically add to "General News Updates" group */}
                        <input
                            type="hidden"
                            value="16"
                            {...register('group[33097][16]')}
                        />

                        {/* Hidden form to collect expanded data */}
                        <input
                            type="hidden"
                            value={getReferrer()}
                            {...register('referrer')}
                        />
                        <input
                            type="hidden"
                            value={pathname}
                            {...register('signupLocation')}
                        />

                        <FillButton
                            size="m"
                            color="primary"
                            isLoading={loading}
                            fullWidth
                            isSubmit
                        >
                            subscribe
                        </FillButton>
                    </form>

                    {errors.email && (
                        <div className="errors">
                            <BodyText color="danger" size="m">
                                {errors.email.message}
                            </BodyText>
                        </div>
                    )}
                </styled.EmailSubscribe>
            )}
        </>
    );
};

export interface UseFormInputs {
    email: string;
    signupLocation: string;
    referrer: string;
    'group[33097][16]': string;
}

type FormUIStatus = 'initial' | 'loading';
