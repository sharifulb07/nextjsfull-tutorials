import "./globals.css";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const metadata: Metadata = {
  title: {
    default: "This tutorial --- sharif dev",
    template: "%s | code area",
  },
  description: "This is my first Nextjs project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body className={"container"}>
        <div className="wrapper">{children}</div>
      </body>
    </html>
  );
}
