import type { Metadata } from "next";
import Footer from "../components/footer";
import "../static/css/globals.css";
import Navbar from "@/components/navbar";


export const metadata: Metadata = {
  title: "Librify",
  description: "A simple library management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="../static/css/globals.css" />
        <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap"
        rel="stylesheet"
        />
        <link rel="icon" href="../../static/img/logogandalf.png" />
      </head>
      <body className="flex flex-col min-h-screen bg-white text-gray-800 dark:bg-[#121212] dark:text-gray-200">
        <Navbar />
        <main className="flex-grow bg-[#fff7e6] dark:bg-[#121212]" >{children}</main>

        <Footer />
      </body>
    </html>
  );
}
