// Inspo https://deliciousbrains.com/
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Input } from '@components/inputs';

export const SubscribeBar: React.FC = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [formStatus, setFormStatus] = useState<FormStatus>('initial');
    const [result, setResult] = useState({});
    const [message, setMessage] = useState('No message set');
    const formName = 'subscribe';

    const onSubmit = async (formData: DripSubscriberData) => {
        console.log(`Pre fetch:`, formData);
        setFormStatus('loading');

        fetch('https://marketing.nervetheatre.io/dev/createSubscriber', {
            method: 'POST',
            body: JSON.stringify(formData),
        })
            .then((res) => {
                console.log('Response:', res);
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setResult(data);
                setFormStatus('success');
                setMessage('Subscribed successfully');
            })
            .catch((error) => {
                console.log(`Client: ${error}`);
                setFormStatus('failure');
                setMessage(
                    `There was a an error when trying to subscribe you: ${error}`
                );
            });
    };

    return (
        <form name={formName} onSubmit={handleSubmit(onSubmit)}>
            {/* Hidden field required by Netlify */}
            <Input
                color="light"
                name="first_name"
                type="text"
                placeholder="First Name"
                ref={register}
                required
            />
            <Input
                color="light"
                name="last_name"
                type="text"
                placeholder="Last Name"
                ref={register}
                required
            />
            <Input
                color="light"
                name="email"
                type="text"
                placeholder="Email"
                ref={register}
                required
            />

            {/* Hidden form to collect required data */}
            <input
                type="hidden"
                name="original_referrer"
                value="/"
                ref={register}
            />
            <input type="hidden" name="time_zone" value="/" ref={register} />
            <input type="hidden" name="country" value="/" ref={register} />
            <input type="hidden" name="landing_url" value="/" ref={register} />
            <input type="hidden" name="user_agent" value="/" ref={register} />
            <input type="hidden" name="ip_address" value="/" ref={register} />

            <input type="submit" />
        </form>
    );
};

export interface DripSubscriberData {
    status: 'active' | 'inactive';
    first_name: string;
    last_name: string;
    email: string;
    ip_address: string;
    user_agent: string;
    country: string;
    time_zone: string;
    landing_url: string;
    original_referrer?: string;
}

type FormStatus = 'initial' | 'loading' | 'success' | 'failure';
