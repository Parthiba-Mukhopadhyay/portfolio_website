import "./globals.css";
import { NavBar } from "../components";
import { Footer } from "../components";
import { Ubuntu } from "next/font/google";
const font = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Parthiba-portfolio",
  description: "all that you need to know",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className={font.className}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
