import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import Navbar from '@/components/Navbar'
import './globals.css'
import { MantineProvider } from '@mantine/core'

const inter = Inter({ subsets: ['latin'] })
export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Price Tracker',
  description: 'Track product prices.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main style={{ maxWidth: 1440, margin: 'auto' }}>
          <MantineProvider>
            <Navbar />
            {children}
          </MantineProvider>
        </main>
      </body>
    </html>
  )
}