import "./globals.css";
import Navbar from "./components/Navbar";
import Providers from "../lib/Providers";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`min-h-screen w-screen text-zinc-600 bg-zinc-100 mx-auto dark:bg-zinc-900 dark:text-zinc-50 relative ${montserrat.className}`}
        >
          <Navbar />
          <main className="min-h-full mx-auto w-full md:max-w-[1000px] bg-inherit">
            {children}
          </main>
        </body>
      </Providers>
    </html>
  );
}
