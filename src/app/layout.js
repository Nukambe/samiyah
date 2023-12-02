import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Samiyah Hubbard",
  description: "Volleyball Player",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main style={{ minHeight: '95vh' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
