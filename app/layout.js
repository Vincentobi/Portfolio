import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"]
});

const serif = DM_Serif_Display({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "Obiora's - Portfolio",
  description: "Created by Obiora Vincent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" />
      </head>
      <body
        className={`${inter.variable} ${serif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
