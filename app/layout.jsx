import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/authProvider";
import Footer from "@/components/Footer";
import { GlobalProvider } from "@/context/GlobalContext";
import { ToastContainer } from "react-toastify";
import "@/assets/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Eco Touch Property Management | Find the perfect Home",
  description: "Find your dream Home",
};

const MainLayout = ({ children }) => {
  return (
    <GlobalProvider>
      <AuthProvider>
        <html lang="en">
          <body>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </AuthProvider>
    </GlobalProvider>
  );
};

export default MainLayout;
