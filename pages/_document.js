import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import theme from '../lib/theme'
import metaDataArnold from '../lib/structureSchemaData'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta name="author" content="Arnold Restrepo Hernandez" />
          <meta
            name="description"
            content="Arnold Restrepo Hernandez, Frontend Developer"
          />
          {/* Google Analytics Head */}
          <Script
            id="analyticsHead"
            strategy="beforeInteractive"
            data-test="analytics"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KV7CNBN');`
            }}
          />
          <Script
            strategy="beforeInteractive"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(metaDataArnold)
            }}
          />
          <meta
            name="keywords"
            content="Frontend Developer, Desarrollador Web, CSS, HTML5, Webpack, JavaScript"
          />
          <link rel="manifest" href="manifest.json" />
          <meta
            property="og:title"
            content="Arnold Restrepo Hernandez - Frontend Developer - UI Designer"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Arnold Restrepo Frontend Developer"
          />
          <meta property="og:url" content="https://arnoldrestrepo.com" />
          <meta
            property="og:image"
            content="https://arnoldrestrepo.com/img/logotipo-arnold-restrepo-800x800.png"
          />
          <meta name="theme-color" content="#023440" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        </Head>
        <body>
          {/* Google Analytics Body */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KV7CNBN"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>`
            }}
          ></noscript>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
