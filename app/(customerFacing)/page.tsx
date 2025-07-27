import Image from "next/image";
import { HomepageSection } from "../components/HomepageSection/HomepageSection";
import { LatestArrivals } from "../components/LatestArrivals/LatestArrivals";
import { MostOrdered } from "../components/MostOrdered/MostOrdered";
import { AllProducts } from "../components/AllProducts/AllProducts";
import { Footer } from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <HomepageSection />
      <LatestArrivals />
      <MostOrdered />
      <AllProducts />
      <Footer />
    </div>
  );
}
