import '@fontsource/inter';
import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./providers/ThemeProvider";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Bianca Souza Aguiar - Fisioterapeuta",
  description: `Fisioterapeuta com título de Especialista em Oncologia pelo COFFITO e ABFO . 
  Atendimento a pacientes oncológicos desde seu diagnóstico. 
  Olhar baseado em evidências científicas, objetivando autonomia, qualidade de vida, prevenção de agravos e 
  minimizando efeitos adversos ao tratamento oncológico, através de condutas individualizadas, integrativas e humanizadas.`,  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">      
      <body>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-xxx"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-xxx');
          `}
        </Script>

        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
