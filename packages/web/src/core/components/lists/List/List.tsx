import React from 'react';

import * as styled from './List.styles';

export const List: React.FC<IList> = ({ className, children }) => {
    return <styled.List className={className}>{children}</styled.List>;
};

export interface IList {
    className?: string;
}
