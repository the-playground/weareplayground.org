import React from 'react';
import { BodyText } from '@components/foundations';
import { useConfigContext } from '@context';

export const Copyright = () => {
    const currentYear = new Date().getFullYear();
    const { name } = useConfigContext();

    return (
        <BodyText size="s" color="dark">
            Copyright &copy; {currentYear}. {name}
        </BodyText>
    );
};
