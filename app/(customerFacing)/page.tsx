import Image from "next/image";
import { HomepageSection } from "../components/HomepageSection/HomepageSection";
import { LatestArrivals } from "../components/LatestArrivals/LatestArrivals";
import { MostOrdered } from "../components/MostOrdered/MostOrdered";
import { AllProducts } from "../components/AllProducts/AllProducts";

export default function Home() {
  return (
    <div>
      <HomepageSection />
      <LatestArrivals />
      <MostOrdered />
      <AllProducts />
    </div>
  )
}
