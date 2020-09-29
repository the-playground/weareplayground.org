// Inspo https://deliciousbrains.com/
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import addToMailchimp, { MailchimpResponse } from 'gatsby-plugin-mailchimp';

import { emailRegexPattern } from '@lib/forms';

import { Input } from '@components/inputs';
import { FillButton } from '@components/actions';
import { BodyText } from '@components/foundations';
import { EmailSubscribeProps } from './EmailSubscribe.d';

import * as styled from './EmailSubscribe.styles';

const SubscriptionSuccess: React.FC = () => {};

export const EmailSubscribe: React.FC<EmailSubscribeProps> = () => {
    // Form Data handlers
    const { register, handleSubmit, errors } = useForm<UseFormInputs>();

    // Form UI state handlers
    const [formUIStatus, setFormUIStatus] = useState<FormUIStatus>('initial');

    // Email Subscription state handlers
    const [subscription, setSubscription] = useState({} as MailchimpResponse);

    // The name of the form
    const formName = 'subscribe';

    /**
     * Handle subscribing users to an email service on submit
     *
     * @param data -The data from the submitted form
     */
    const onSubmit = async (data: UseFormInputs) => {
        setFormUIStatus('loading');
        const results = await addToMailchimp(data.email, {
            SIGNUPLOC: data.signupLocation,
            REFERRER: data.referrer,
            'group[33097][16]': '16',
        });

        setSubscription(results);
        setFormUIStatus('initial');
    };

    return (
        <>
            {subscription.result === 'success' ? (
                <></>
            ) : (
                <styled.EmailSubscribe>
                    <form name={formName} onSubmit={handleSubmit(onSubmit)}>
                        {/* Hidden field required by Netlify */}
                        <Input
                            color="light"
                            name="email"
                            type="text"
                            placeholder="your email address"
                            ref={register({
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
                            name="group[33097][16]"
                            ref={register}
                        />

                        {/* Hidden form to collect expanded data */}
                        <input
                            type="hidden"
                            name="referrer"
                            value="/"
                            ref={register}
                        />
                        <input
                            type="hidden"
                            name="signupLocation"
                            value="/"
                            ref={register}
                        />

                        <FillButton
                            size="m"
                            color="primary"
                            isLoading={formUIStatus === 'loading'}
                            isSubmit
                        >
                            Subscribe
                        </FillButton>
                    </form>

                    {errors.email && (
                        <div className="errors">
                            <BodyText color="danger" size="m" tag="p">
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
}

type FormUIStatus = 'initial' | 'loading';
