import { useState, useEffect } from 'react';

export const useLocalStorage = (key: string, initial: any) => {
    const item = window.localStorage.getItem(key);
    const [value, setValue] = useState(item ?? initial);

    useEffect(() => {
        if (!item) {
            setValue(initial);
        }

        window.localStorage.setItem(key, value);
    }, [value, key]); // eslint-disable-line

    return [value, setValue];
};
