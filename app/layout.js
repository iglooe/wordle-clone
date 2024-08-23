import { Inter } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/components/ui/theme-provider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wordle Clone",
  description: "A Wordle clone in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
