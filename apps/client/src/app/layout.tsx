'use client';
import '../styles/globals.css'
import { ThemeProvider } from "next-themes";
import { Inter } from 'next/font/google'
import { ReduxProvider } from '../redux/provider'
import PageLayout from "../layouts/page";

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
            <PageLayout>
              {children}
            </PageLayout>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
