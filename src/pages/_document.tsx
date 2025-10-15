import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased bg-[#f7f7f8] text-[#1d1d1f]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
