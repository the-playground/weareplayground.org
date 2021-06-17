import * as React from 'react';
import { PageProps } from 'gatsby';

import { GatsbyPageContext } from '@web/shared/types';

import { useCurrentURL } from '@web/shared/hooks';

import { PageBasicSEO } from '@web/domains/app';
import { NotFoundContent } from '@web/page-parts/404';

const NotFound: React.FC<PageProps<GatsbyPageContext>> = ({ location }) => {
    const url = useCurrentURL(location.pathname);

    return (
        <>
            <PageBasicSEO
                url={url}
                title="Page Not Found (404) | The Nerve"
                description="We couldn't find the page you're looking for."
                hideSEO
            />
            <NotFoundContent />
        </>
    );
};

export default NotFound;
