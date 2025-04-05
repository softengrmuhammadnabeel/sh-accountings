import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout";
const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});


export const metadata = {
  title: "Clear Horizon",
  description: "Developed by MD Nabeel",
  icons: {
    icon: "/navbar/3-tab.png",
    shortcut: "/navbar/3-tab.png",
    apple: "/navbar/3-tab.png",
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" scroll-smooth">
      <head>
        <link rel="icon" href="/navbar/3-tab.png" type="image/png" />
      </head>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden
         dark:bg-darkTheme dark:text-white`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
