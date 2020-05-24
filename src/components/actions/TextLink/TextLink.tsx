import * as React from 'react';

import { TextLinkProps } from './__types';
import * as styled from './__styles';

export const TextLink: React.FC<TextLinkProps> = ({ link, children }) => {
    return <styled.TextLink to={link.to}>{children}</styled.TextLink>;
};
