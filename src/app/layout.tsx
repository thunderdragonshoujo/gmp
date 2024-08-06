import type { Metadata } from "next";
import "./globals.css";
import Footer from "./Footer";
import Header from "./HeaderFullNav";
import { Toaster } from "@/components/ui/toaster"




export const metadata: Metadata = {
  title: "GlobalMicrowaveParts",
  description: "Your source for microwave oven replacement parts",
  keywords:'Microware Parts Replacement Repair Servicing Magnetron Capacitor Switch Diode Fuse',
  robots:'',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en">
      <body className='bg-black min-w-100'>
      <Header/>
      {children}
      <Toaster />
      <Footer/>
      </body>
    </html>
    </>
  );
}
