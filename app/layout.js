import Footer from "./Footer/page";
import "./globals.css";
import Navbar from "./Navbar/Page";

export const metadata = {
  title: "LWS Kitchen - Food Blog and Recipes",
  description: "LWS Kitchen - Food Blog and Recipes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
