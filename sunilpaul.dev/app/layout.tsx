import { Poppins } from "next/font/google";
import "./globals.css";

import { ReactNode } from "react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Sunil Paul Portfolio",
  description: "My NextJS Portfolio",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} antialiased leading-8 overflow-x-hidden relative`}
      >
        {/* Page Content */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
