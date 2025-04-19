import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});
export const metadata = {
  title: "Clear Horizon Accountant",
  description: "Developed by MD Nabeel",
  icons: {
    icon: [
      { url: "/tab/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/tab/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/tab/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/tab/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/tab/apple-touch-icon.png",
    shortcut: "/tab/favicon.ico",
  },
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
        <ToastContainer position="bottom-right" autoClose={5000} />

      </body>
    </html>
  );
}
