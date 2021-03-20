import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '@nerve/core/themes/default';

import {
    ConfigProvider,
    EnvironmentProvider,
    UIProvider,
} from '@nerve/shared/context';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <EnvironmentProvider>
                <ConfigProvider>
                    <ThemeProvider theme={theme}>
                        <UIProvider>
                            <Component {...pageProps} />
                        </UIProvider>
                    </ThemeProvider>
                </ConfigProvider>
            </EnvironmentProvider>
        </>
    );
}
