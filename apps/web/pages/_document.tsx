import Document, {
   DocumentContext,
   DocumentInitialProps,
   Head,
   Html,
   Main,
   NextScript,
} from 'next/document'
import Script from 'next/script'
import { ServerStyleSheet } from 'styled-components'
import { WEBSITE } from '../constants'

export default function PagesDocument({
   nonce,
}: DocumentInitialProps & { nonce: string | undefined }) {
   return (
      <Html lang="en">
         <Head nonce={nonce}>
            <meta name="referrer" content="origin-when-cross-origin" />
            <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <meta name="keywords" content={WEBSITE.keywords} key="keywords" />
            <meta httpEquiv="content-language" content="en-us" />
            <meta httpEquiv="content-script-type" content="text/javascript" />
            <meta httpEquiv="content-style-type" content="text/css" />
            <meta httpEquiv="window-target" content="_top" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="icon" type="image/png" href="/loco.png" />
            <link rel="shortcut icon" type="image/x-icon" href="/loco.png" />
            <meta name="theme-color" content={WEBSITE.color} media="(prefers-color-scheme: dark)" />
            <Script
               src="https://accounts.google.com/gsi/client"
               nonce={nonce}
               async
               defer
               strategy="afterInteractive"
            />
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   )
}

PagesDocument.getInitialProps = async (
   ctx: DocumentContext
): Promise<DocumentInitialProps & { nonce: string | undefined }> => {
   const nonce =
      (ctx.req?.headers?.['x-nonce'] as string) || crypto.randomUUID()

   const sheet = new ServerStyleSheet()

   const originalRenderPage = ctx.renderPage

   try {
      ctx.renderPage = () =>
         originalRenderPage({
            enhanceApp: (App) => (props) =>
               sheet.collectStyles(<App {...props} />),
         })

      const initialProps = await Document.getInitialProps(ctx)

      return {
         ...initialProps,
         nonce,
         styles: (
            <>
               {initialProps.styles}
               {sheet.getStyleElement()}
            </>
         ),
      }
   } finally {
      sheet.seal()
   }
}
