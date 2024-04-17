import React from "react";
import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/authProvider";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Eco Touch Property Management | Find the perfect Home",
  description: "Find your dream Home",
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
