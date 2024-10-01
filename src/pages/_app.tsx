import type { AppProps } from "next/app";
import Layout from "@/components/templates/Layout";
import { ThemeProvider } from 'styled-components';
import { theme } from "@/styles/theme";
import { GlobalStyle } from "@/styles/globalStyle";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </ThemeProvider>
  )
}
