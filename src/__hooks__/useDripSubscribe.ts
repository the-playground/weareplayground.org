import { useState, useEffect } from 'react';
import * as drip from '@lib/drip';

export const useDripSubscribe = async (data: DripSubscriberData) => {
    const [result, setResult] = useState({});
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch(`${drip.baseURL}/subscribers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: drip.auth,
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                setResult(data);
                setMessage('Subscribed successfully');
            })
            .catch((error) => {
                setMessage('There was a an error when trying to subscribe you');
            });
    }, [data]);

    return {
        result,
        message,
    };
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
