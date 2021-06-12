import React from 'react';

import * as styled from './ListItem.styles';

export const ListItem: React.FC<IListItem> = ({ className, children }) => {
    return <styled.ListItem className={className}>{children}</styled.ListItem>;
};

export interface IListItem {
    className?: string;
}
