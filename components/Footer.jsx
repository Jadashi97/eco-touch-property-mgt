import Image from "next/image";
import logo1 from "@/assets/images/logo1.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gray-200 py-4 mt-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0">
          <Image src={logo1} alt="Logo" className="h-8 w-auto" />
        </div>
        <div>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            &copy; {currentYear} Eco Touch Properties. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
