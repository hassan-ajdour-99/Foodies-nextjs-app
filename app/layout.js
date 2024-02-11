import HeaderBackground from "@/components/layout/Headerbackground";
import "./globals.css";
import Header from "@/components/layout/Header";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <HeaderBackground />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
