import * as React from 'react';
import { PageProps } from 'gatsby';

import { GatsbyPageContext } from '@nerve/shared/types';

import { useCurrentURL } from '@nerve/shared/hooks';

import { PageBasicSEO } from '@nerve/domains/seo';
import { NotFoundContent } from '@nerve/page-parts/404';

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
