import Head from "next/head";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/layout/modules/Footer";

export const metadata: Metadata = {
  title: "NPC Studio",
  description:
    "Equip your AI workforce. Train for less idle time. Try to survive in style.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>NPC Studio</title>
        <meta name="og:image" content="https://www.npcstudio.xyz/card.png/" />
        <link
          rel="preload"
          href="https://npcstudio.xyz/fonts/InternalRainbows.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://npcstudio.xyz/fonts/Manaspace.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <style
        style={{
          height: "100%",
          minHeight: "100vh",
          display: "flex"

        }}
          dangerouslySetInnerHTML={{
            __html: `
                @font-face {
                    font-family: "Manaspace";
                    font-weight: 400;
                    src: url("https://npcstudio.xyz/fonts/Manaspace.ttf");
                }

                @font-face {
                  font-family: "Internal Rainbows";
                  font-weight: 400;
                  src: url("https://npcstudio.xyz/fonts/InternalRainbows.ttf");
                }
`,
          }}
        />
      </Head>
      <body className="relative w-full h-full flex">{children}</body>
      <Footer />
    </html>
  );
}
