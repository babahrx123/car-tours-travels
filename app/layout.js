import { Inter } from "next/font/google";
import "./globals.css";
// layout.js
// import "../styles/styles.scss";
// import "@/styles/NavbarStyles.scss";
// import "@/styles/styles.scss";
import "../styles/styles.scss";
// import Navbar from "@/components/Navbar";
import Navbar from "../components/Navbar";
import { LuPhone } from "react-icons/lu";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Tours and Travel - Fast and Easy Booking",
  description:
    "Explore the world with our car tours and travel services. Fast and easy booking, unbeatable prices, and flexible itineraries to make your journey unforgettable.",
  keywords: [
    "car tours",
    "travel",
    "car rental",
    "fast booking",
    "easy booking",
    "travel services",
    "car travel",
    "tours and travel",
  ],
  author: "Shanawaz S, Car Tours and Travel",
  viewport: "width=device-width, initial-scale=1.0",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <a
          href="tel:+919886567456"
          className="shake-animate"
          style={{
            position: "fixed",
            bottom: "6%",
            right: "52px",
            zIndex: "10000",
            width: "50px",
            height: "50px",
            background: "#000",
            borderRadius: "10px",
            padding: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <LuPhone style={{ color: "#fff", fontSize: "32px" }} />
        </a>
      </body>
    </html>
  );
}
