import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Is er nog iemand op kantoor?',
  description: 'Normale werktijden? Zo normaal is dat niet. Maar wel bij Joinson&Spice.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">

      <meta name="description" content="Normale werktijden in de accountancy? Ja tuurlijk!" />

      {/* Facebook Meta Tags */}
      <meta property="og:url" content="https://flow.joinsonandspice.nl" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Is er nog iemand op kantoor?" />
      <meta property="og:description" content="Normale werktijden in de accountancy? Ja tuurlijk!" />
      <meta property="og:image" content="https://images.joinsonandspice.nl/opengraph/js.png" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="flow.joinsonandspice.nl" />
      <meta property="twitter:url" content="https://flow.joinsonandspice.nl" />
      <meta name="twitter:title" content="Is er nog iemand op kantoor?" />
      <meta name="twitter:description" content="Normale werktijden in de accountancy? Ja tuurlijk!" />
      <meta name="twitter:image" content="https://images.joinsonandspice.nl/opengraph/js.png" />

      <body className={inter.className}>{children}</body>
    </html>
  )
}
