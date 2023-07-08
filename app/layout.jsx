import "./globals.css";
import Navbar from "./components/Navbar";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`h-screen mx-auto ${montserrat.className}`}>
        <main className="h-full mx-auto w-full p-4 md:max-w-[1000px]">
          <Navbar />

          {children}
        </main>
      </body>
    </html>
  );
}
