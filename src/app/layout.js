import { Poppins, Tajawal } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/(global)/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const tajwal = Tajawal({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
});

export const metadata = {
  title: "Voils - Premium Petroleum Products",
  description:
    "Voils is a leading supplier of premium petroleum products, offering high-quality engine oils, lubricants, and more. Trusted by industries worldwide.",
  keywords:
    "petroleum, engine oil, lubricants, Voils, automotive oil, industrial lubricants, motor oil, synthetic oil",
  openGraph: {
    title: "Voils - Premium Petroleum & Lubricants",
    description:
      "Discover high-quality petroleum products from Voils. Engine oils, lubricants, and industrial solutions trusted worldwide.",
    url: "https://voils.in",
    siteName: "Voils",
    type: "website",
    images: [
      {
        url: "/logo_1.png", // Add an actual image URL
        width: 1200,
        height: 630,
        alt: "Voils Petroleum Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@voils",
    title: "Voils - Premium Petroleum Products",
    description:
      "Voils is a trusted name in petroleum, offering high-quality lubricants, engine oils, and industrial solutions.",
    images: ["https://voils.in/logo_1.png"], // Add actual image URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="I_Y4hGZqwoWQhbAH1As-sEtG3QPFpeT_CAj_MnzQHNI"
        />
      </head>
      <body
        className={`${tajwal.variable} ${poppins.variable} antialiased bg-[#f0f0f0]`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
