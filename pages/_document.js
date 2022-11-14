import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fi">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.svg" />
        <meta name="theme-color" content="#222632" />
        <meta name="description" content="Welcome to my portfolio." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
