import React from "react";
import { Header } from "@uber9/micro-next-common-lib";
import data from "../data/homepage.json";
import HeroBannerSection from "./HeroBanner/HeroBannerSection";
import LegalExpertSection from "./LegalExpertComponent/LegalExpertSection";
import OurCustomerSection from "./OurCustomerComponent/OurCustomerSection";
import OurProductSection from "./OurProductComponent/OurProductSection";
import SecurityResultSection from "./SecurityResultComponent/SecurityResultSection";
const Homepage = () => {
  return (
    <div>
      <Header type="zolvit" />
      <HeroBannerSection data={data} />
      <div className="mt-[380px]">
      <LegalExpertSection data={data} />
      <OurCustomerSection data={data} />
      <OurProductSection  data={data} />
      <SecurityResultSection data={data} />
      </div>
    </div>
  );
};

export default Homepage;
