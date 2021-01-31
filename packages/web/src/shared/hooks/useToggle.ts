import { useState } from 'react';

export const useToggle = () => {
    const [isToggled, setIsToggled] = useState(false);

    const toggle = () => setIsToggled((prevState) => !prevState);

    return { isToggled, setIsToggled, toggle };
};

export type UseToggleReturn = ReturnType<typeof useToggle>;
