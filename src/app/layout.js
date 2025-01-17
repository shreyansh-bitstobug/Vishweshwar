import { Poppins, Tajawal } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/(global)/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins"
});

const tajwal = Tajawal({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal"
});

export const metadata = {
  title: "Vishveshwar Oil",
  description: "Vishveshwar Oil & Lubricants Pvt Ltd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${tajwal.variable} ${poppins.variable} antialiased bg-[#f0f0f0]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
