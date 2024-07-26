import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sofezza Core",
  description: "A new way to development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/jquery.slick/1.5.9/slick-theme.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/jquery.slick/1.5.9/slick.css"/>
    </head>
      <body className={inter.className}>
        {children}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js" />
        <Script src="https://cdn.jsdelivr.net/jquery.slick/1.5.9/slick.min.js" />
        <Script src="/assets/js/aos.js" />
        <Script src="/assets/js/sofezza.js" />
      </body>
    </html>
  );
}
