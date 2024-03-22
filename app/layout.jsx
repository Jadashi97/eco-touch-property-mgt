import React from "react";
import "@/assets/styles/globals.css";

export const metadata = {
  title: "Eco Touch Property Management | Find the perfect Home",
  description: "Find your dream Home",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default MainLayout;
