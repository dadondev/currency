import { GlobalStyle } from "@/general/utils/GlobalStyle";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Valyuta kursi",
  description: "Valyuta kursi, bugungi valyuta kursi, currency, dadondev",
  creator: "dadondev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <GlobalStyle />
        {children}
      </body>
    </html>
  );
}
