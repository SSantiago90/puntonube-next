import "./globals.css";
import './app.css'
import type { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Punto Nube",
  description: "Tu Visión, Nuestra Innovación Digital: desarrollo web, IA y diseño de vanguardia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn("light")}>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased"
        )}
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/noise-texture.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "200px",
            opacity: 0.05,
            backgroundBlendMode: "overlay",
          }}
        />

        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
