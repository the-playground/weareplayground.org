// Inspo https://deliciousbrains.com/
import React from 'react';
import { useForm } from 'react-hook-form';

import { emailRegexPattern } from '@nerve/shared/lib';
import { useMailchimpSubscribe } from '@nerve/shared/hooks';

import { BodyText, FillButton, Heading, Input } from '@nerve/core/components';

import { EmailSubscribeProps } from './EmailSubscribe.d';
import * as styled from './EmailSubscribe.styles';

export const EmailSubscribe: React.FC<EmailSubscribeProps> = () => {
    // Form Data handlers
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<NewsSubscribeInputs>();

    // Mailchimp subscription handlers
    const {
        config: { messages, groups },
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
    const onSubmit = async (data: NewsSubscribeInputs) => {
        await subscribe(data.email, {
            SIGNUPLOC: data.signupLocation,
            REFERRER: data.referrer,
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
                <styled.EmailSubscribe>
                    <form name={FORM_NAME} onSubmit={handleSubmit(onSubmit)}>
                        {/* Hidden field required by Netlify */}
                        <Input
                            color="light"
                            type="text"
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
                            {...register('referrer')}
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
                </styled.EmailSubscribe>
            )}
        </>
    );
};

export interface NewsSubscribeInputs {
    email: string;
    signupLocation: string;
    referrer: string;
    [key: string]: string;
}
