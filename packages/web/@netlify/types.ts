// This type is referenced from  'Actions['createRedirect']' in 'gatsby'
export interface NetlifyRedirect {
    fromPath: string;
    isPermanent?: boolean;
    toPath: string;
    redirectInBrowser?: boolean;
    force?: boolean;
    statusCode?: number;
    [key: string]: unknown;
}
