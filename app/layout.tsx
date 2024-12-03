import localFont from "next/font/local";
import "./globals.css";

const bodoniModa = localFont({
  src: "./fonts/BodoniModa.ttf",
  variable: "--font-bododni-moda",
  weight: "100 900",
});

const lexendDeca = localFont({
  src: "./fonts/LexendDeca.ttf",
  variable: "--font-lexend-deca",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodoniModa.variable} ${lexendDeca.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
