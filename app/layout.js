import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ali Lotfi | Front-end Developer",
  description:
    "Hi there, I'm Ali. A self-taught front-end developer from Rasht, Iran",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex justify-center bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
