import type { Metadata } from "next";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "Unpacking sustainability through design",
  description: "A faculty round table on the MIAD logics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
