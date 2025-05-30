import { Layout } from 'my-nextra-theme'
import { Head } from 'nextra/components'
 
export default function MyLayout({ children, ...props }) {
  return (
    <html lang="en">
      <Head faviconGlyph="✦"
        color={{
            hue: 236,
            saturation: 87,
            lightness: {
            light: 46,
            dark: 100
            }
        }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}