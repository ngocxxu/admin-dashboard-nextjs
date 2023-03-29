import Sidebar from '@/components/Sidebar';
import '@/styles/globals.css';
import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Sidebar {...pageProps}>
          <Component {...pageProps} />
        </Sidebar>
      </MantineProvider>
    </>
  );
}
