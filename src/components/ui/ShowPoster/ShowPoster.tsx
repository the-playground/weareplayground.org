import React from 'react';
import { ShowSnippet } from '@type/show';

import * as styled from './__styles';

export const ShowPoster: React.FC<ShowPosterProps> = ({ data }) => {
    return <styled.ShowPoster>{data.title}</styled.ShowPoster>;
};

export interface ShowPosterProps {
    data: ShowSnippet;
}
