import Sidebar from '@/components/Sidebar/Sidebar';
import { wrapper } from '@/store/store';
import '@/styles/globals.css';
import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
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

export default wrapper.withRedux(App);
