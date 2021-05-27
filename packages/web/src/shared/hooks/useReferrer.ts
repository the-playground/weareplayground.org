import { useEffect, useState } from 'react';

export const useReferrer = () => {
    const [referrer, setReferrer] = useState('unknown');

    useEffect(() => {
        setReferrer(document.referrer);
    }, []);

    return [referrer];
};
