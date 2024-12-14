import { Geist, Geist_Mono } from "next/font/google";
import {
  ClerkLoaded,
  ClerkLoading,
  ClerkProvider,
} from '@clerk/nextjs'
import { dark } from "@clerk/themes";
import "./globals.css";
import { HashLoader } from "react-spinners";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    //  appearance={{ baseTheme: dark }}
     >
      <html lang="en">
        <body>
          <ClerkLoading>
            <HashLoader />
          </ClerkLoading>
          <ClerkLoaded>
            {children}
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}



