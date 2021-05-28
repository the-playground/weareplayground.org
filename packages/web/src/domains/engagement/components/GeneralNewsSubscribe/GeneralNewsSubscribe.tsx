// Inspo https://deliciousbrains.com/
import React from 'react';
import { useForm } from 'react-hook-form';

import { emailRegexPattern } from '@nerve/shared/lib';
import { useMailchimpSubscribe } from '@nerve/shared/hooks';

import { BodyText, FillButton, Heading, Input } from '@nerve/core/components';

import * as styled from './GeneralNewsSubscribe.styles';

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
                        {/* Hidden field required by Netlify */}
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

                        {/* Automatically add to "General Subscriber" group */}
                        <input
                            type="hidden"
                            value={[groups.GENERAL_NEWS.inputID]}
                            {...register(groups.GENERAL_NEWS.inputName)}
                        />

                        {/* Hidden form to collect expanded data */}
                        <input
                            type="hidden"
                            value={referrer}
                            {...register('externalReferrer')}
                        />
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

                    {errors.email && (
                        <div className="errors">
                            <BodyText color="danger" size="m">
                                {errors.email.message}
                            </BodyText>
                        </div>
                    )}

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
