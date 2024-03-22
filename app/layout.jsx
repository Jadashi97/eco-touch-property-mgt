import React from "react";
import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Eco Touch Property Management | Find the perfect Home",
  description: "Find your dream Home",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <Navbar />
      <main>{children}</main>
    </html>
  );
};

export default MainLayout;
