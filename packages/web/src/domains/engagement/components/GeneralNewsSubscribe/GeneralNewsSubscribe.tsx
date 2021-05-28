// Inspo https://deliciousbrains.com/
import React from 'react';
import { useForm } from 'react-hook-form';

import { emailRegexPattern } from '@nerve/shared/lib';
import { useMailchimpSubscribe } from '@nerve/shared/hooks';

import { BodyText, FillButton, Heading, Input } from '@nerve/core/components';

import * as styled from './GeneralNewsSubscribe.styles';

/**
 * This component handles composing form data and Mailchimp subscription logic
 * into a single email input field (along with some other hidden metadata fields)
 * that, when submitted, will subscribe a user to our Mailchimp list and add
 * them to the group associated with general news updates.
 *
 * All state and data for this component is entirely self-contained.
 */
export const GeneralNewsSubscribe: React.FC = () => {
    // Form Data handlers
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<GeneralNewsSubscribeInputs>();

    // Mailchimp subscription handlers
    const {
        config: { messages, groups, FIELDS },
        loading,
        currentPath,
        subscribe,
        referrer,
        response,
    } = useMailchimpSubscribe();

    /**
     * Handle subscribing users to an email service on submit
     *
     * @param data -The data from the submitted form
     */
    const onSubmit = async (data: GeneralNewsSubscribeInputs) => {
        await subscribe(data.email, {
            [FIELDS.SIGNUP_LOCATION]: data.signupLocation,
            [FIELDS.EXTERNAL_REFERRER]: data.externalReferrer,
            [groups.GENERAL_NEWS.inputName]: groups.GENERAL_NEWS.inputID,
        });
    };

    const FORM_NAME = 'subscribe';

    return (
        <>
            {/* Displays when a user was successfully subscribed */}
            {response.result === 'success' ? (
                <styled.SubscriptionSuccess>
                    <Heading
                        as="h3"
                        color="light"
                        size="xs"
                        className="success-title"
                    >
                        {messages.success.default.title}
                    </Heading>
                    <BodyText color="light" size="m" className="success-copy">
                        {messages.success.default.copy}
                    </BodyText>
                </styled.SubscriptionSuccess>
            ) : (
                <styled.GeneralNewsSubscribe>
                    <form name={FORM_NAME} onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            color="light"
                            type="text"
                            label="Email Address"
                            placeholder="your email address"
                            {...register('email', {
                                required: messages.error.requiredEmail,
                                pattern: {
                                    value: emailRegexPattern,
                                    message: messages.error.invalidEmail,
                                },
                            })}
                        />

                        {/* Auto-associate this form with "General News Updates" group */}
                        <input
                            type="hidden"
                            value={[groups.GENERAL_NEWS.inputID]}
                            {...register(groups.GENERAL_NEWS.inputName)}
                        />

                        {/* The referring external URL (if user did not come here directly) */}
                        <input
                            type="hidden"
                            value={referrer}
                            {...register('externalReferrer')}
                        />

                        {/* The current page the user is on where this form appears */}
                        <input
                            type="hidden"
                            value={currentPath}
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

                    {/* Displays form validation errors */}
                    {errors.email && (
                        <div className="errors">
                            <BodyText color="danger" size="m">
                                {errors.email.message}
                            </BodyText>
                        </div>
                    )}

                    {/* Displays response information from Mailchimp if the subscribe attempt was not successful */}
                    {!loading && !errors.email && response.msg && (
                        <div className="response-info">
                            <BodyText color="accent" size="m">
                                <span
                                    // eslint-disable-next-line react/no-danger
                                    dangerouslySetInnerHTML={{
                                        __html: response.msg,
                                    }}
                                />
                            </BodyText>
                        </div>
                    )}
                </styled.GeneralNewsSubscribe>
            )}
        </>
    );
};

export interface GeneralNewsSubscribeInputs {
    email: string;
    signupLocation: string;
    referrer: string;
    [key: string]: string;
}
