'use client';
import { ThemeProvider } from "next-themes";
import { Inter } from 'next/font/google'
import { ReduxProvider } from '../redux/provider'

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <ThemeProvider enableSystem={true} attribute="class">
            {children}
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
