import "./globals.css";
import { Inter } from "next/font/google";
import { GlobalContextProvider } from "./context/store";
import Layout from "./components/Layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gamezop",
  description: "Utility by gamezop",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
          <Layout>{children}</Layout>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
