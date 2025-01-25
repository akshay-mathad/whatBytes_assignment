import "./styles/globals.css";

export const metadata = {
  title: "WhatBytes Dashboard",
  description: "Skill-wise and Question Analysis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">{children}</body>
    </html>
  );
}
