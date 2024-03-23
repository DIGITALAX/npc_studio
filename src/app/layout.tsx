import "@rainbow-me/rainbowkit/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/layout/modules/Footer";
import Providers from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.npcstudio.xyz"),
  title: "NPC Studio",
  description:
    "Equip your AI workforce. Train for less idle time. Try to survive in style.",
  twitter: {
    card: "summary_large_image",
    site: "@digitalax_",
    title: "NPC Studio",
    description:
      "Equip your AI workforce. Train for less idle time. Try to survive in style.",
    images: ["https://www.npcstudio.xyz/card.png/"],
  },
  openGraph: {
    title: "NPC Studio",
    description:
      "Equip your AI workforce. Train for less idle time. Try to survive in style.",
    images: "https://www.npcstudio.xyz/card.png/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative w-full h-fit flex flex-col items-start justify-start md:pt-4 md:px-4 min-h-full">
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
