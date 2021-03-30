export const siteConfigQuery = `*[_type == "siteConfig"][0] {
    verificationGoogle,
    verificationBing
}`;

export interface ISiteConfig {
    verificationGoogle: string;
    verificationBing: string;
}
