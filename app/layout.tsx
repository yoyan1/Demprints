import type { Metadata } from "next";
import "./globals.css";
import {ThemeProvider} from './components/theme/theme-provider'

export const metadata: Metadata = {
  title: "DEMPRINTS",
  description: "Generated by create next app",
  icons: {
    icon: '/LogoV3.jpg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
