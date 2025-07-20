import { Orbitron } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

// const orbitron = Orbitron;

export const metadata = {
  title: "Game Glitch Blog",
  description: "Share your video game glitches or explore the database",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
      <body className="bg-gray-700 text-gray-400 p-8">
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
