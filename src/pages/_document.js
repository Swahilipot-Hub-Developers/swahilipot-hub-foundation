/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* CSS Implementing Plugins */}
        <link
          rel="stylesheet"
          href="/assets/vendor/bootstrap-icons/font/bootstrap-icons.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/hs-mega-menu/dist/hs-mega-menu.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/swiper/swiper-bundle.min.css"
        />
        <link rel="stylesheet" href="/assets/css/theme.min.css" />

        {/* Google Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4ENSZT8E09"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4ENSZT8E09');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* JS Global Compulsory */}
        <script src="/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
        {/* JS Implementing Plugins */}
        <script src="/assets/vendor/hs-mega-menu/dist/hs-mega-menu.min.js"></script>
        <script src="/assets/vendor/hs-show-animation/dist/hs-show-animation.min.js"></script>
        <script src="/assets/vendor/hs-go-to/dist/hs-go-to.min.js"></script>
        <script src="/assets/vendor/hs-nav-scroller/dist/hs-nav-scroller.min.js"></script>
        <script src="/assets/vendor/typed.js/lib/typed.min.js"></script>
        {/* JS Space */}
        <script src="/assets/js/theme.min.js"></script>
        {/* JS Plugins Init. */}
        <script src="/assets/js/plugin.js"></script>
        <script async src="/assets/js/theme.min.js"></script>
        <script async src="/assets/vendor/swiper/swiper-bundle.min.js"></script>
        {/* Activate plugins */}
        <script async src="/assets/vendor/fslightbox/index.js"></script>
        <script async src="/assets/js/activate-plugins.js"></script>
        {/* custom js */}
        <script async src="/assets/js/theme-custom.js"></script>
        {/* org verification */}
        <script async src="/js/ngosource.js"></script>
      </body>
    </Html>
  )
}
