import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./Components/Footer";
import StateContext from "./context/StateContext";
import { Toaster } from "react-hot-toast";
// import Header from "./Components/Header";
// import {
//   ClerkProvider,
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   UserButton
// } from '@clerk/nextjs'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Figma Design",
  description: "Create by Muhammad Sharjeel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StateContext>
          <Toaster />
          <main>{children}</main>
        </StateContext>
        <Footer />
      </body>
    </html>

    // <ClerkProvider>
    //   <html lang="en">
    //     <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    //       <SignedOut>
    //         <SignInButton />
    //       </SignedOut>
    //       <SignedIn>
    //         <UserButton />
    //       </SignedIn>
    //       {children}
    //     </body>
    //   </html>
    // </ClerkProvider>
  );
}
