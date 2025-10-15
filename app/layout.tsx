import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sho-ps.co.jp'),
  title: '小学館パブリッシング・サービス',
  description:
    '私たちの仕事は、小学館の本と未来の読者になるであろう方々との接点を創ることです。',
  openGraph: {
    title: '小学館パブリッシング・サービス',
    url: 'https://www.sho-ps.co.jp',
    type: 'website',
    images: [{ url: '/assets/common/ogp.png' }],
    locale: 'ja_JP'
  },
  twitter: { card: 'summary_large_image', title: '小学館パブリッシング・サービス' },
  icons: {
    icon: [
      { url: '/assets/common/favicon.ico' },
      { url: '/assets/common/favicon.svg', type: 'image/svg+xml' },
      { url: '/assets/common/favicon.png', sizes: '192x192' }
    ],
    apple: [{ url: '/assets/common/apple-touch-icon.png' }]
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        {/* Google Fonts（Noto Sans JP） */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-P7VT7LKB');`}
        </Script>
      </head>
      <body id="body" className="min-h-dvh bg-white text-neutral-900">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P7VT7LKB"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
