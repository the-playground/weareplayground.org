import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '@nerve/core/themes/default';

import {
    ConfigProvider,
    EnvironmentProvider,
    UIProvider,
} from '@nerve/shared/context';

export default function NerveApp({
    Component,
    pageProps,
}: AppProps): JSX.Element {
    return (
        <>
            <ThemeProvider theme={theme}>
                <UIProvider>
                    <Component {...pageProps} />
                </UIProvider>
            </ThemeProvider>
        </>
    );
}
