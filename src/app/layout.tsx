import "@rainbow-me/rainbowkit/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/layout/modules/Footer";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "NPC Studio",
  description:
    "Equip your AI workforce. Train for less idle time. Try to survive in style.",
  twitter: {
    images: ["https://www.npcstudio.xyz/card.png/"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className="relative w-full h-fit flex flex-col items-start justify-start md:pt-4 md:px-4 min-h-full">
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
