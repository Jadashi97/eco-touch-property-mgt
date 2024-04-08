import Hero from "@/components/Hero";
import InforBoxes from "@/components/InforBoxes";
import HomeProperties from "@/components/HomeProperties";

const HomePage = () => {
  console.log(process.env.MONGODB_URI);

  return (
    <>
      <Hero />
      <InforBoxes />
      <HomeProperties />
    </>
  );
};

export default HomePage;
