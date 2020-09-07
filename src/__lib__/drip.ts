import { isSSR } from '@lib/ssr';

export const accountID = process.env.GATSBY_DRIP_ACCOUNT_ID as string;
const rawApiKey = process.env.GATSBY_DRIP_API_KEY as string;

// Base 64 encode key
const safeApiKey = isSSR ? '' : window.btoa(rawApiKey);

export const auth = `Basic ${safeApiKey}`;
export const baseURL = `https://api.getdrip.com/v2/${accountID}`;
