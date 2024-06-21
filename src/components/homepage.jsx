import React from "react";
import { Header } from "@uber9/micro-next-common-lib";
import data from "../data/homepage.json";
import HeroBannerSection from "./HeroBanner/HeroBannerSection";
import LegalExpertSection from "./LegalExpertComponent/LegalExpertSection";
import OurCustomerSection from "./OurCustomerComponent/OurCustomerSection";
import OurProductSection from "./OurProductComponent/OurProductSection";
import SecurityResultSection from "./SecurityResultComponent/SecurityResultSection";
import StoryReviewSection from "./StoryReviewComponent/StoryReviewSection";
import StartBusinessSection from "./StartBusinessBanner/StartBusinessSection";
import VisionSection from "./VisionBanner/VisionSection";
import NewsSection from "./NewsBanner/NewsSection";
import BlogSection from "./Blogs/BlogSection";
import NewTestimonial from "./StoryReviewComponent/NewTestimonial";
import FeaturesSection from "./FeatuesComponent/FeaturesSection";
import FooterWithLinks from "./FooterWithLinkComponent/FooterWithLinks";
const Homepage = (props) => {
  return (
    <div>
      <Header type="zolvit" />
      <HeroBannerSection data={data} />
      <div className="flex flex-col mt-[380px] md:gap-[40px]">
        <LegalExpertSection data={data} />
        <OurCustomerSection data={data} />
        <OurProductSection data={data} />
        <SecurityResultSection data={data} />
        <NewTestimonial newTestimonial={data?.newTestimonial} />
        <FeaturesSection data={data} />
        <StartBusinessSection data={data} />
        <VisionSection data={data?.visionSection} />
        <NewsSection data={data?.newsSection} />
        {props?.blogSection && <BlogSection data={props?.blogSection} />}

        <FooterWithLinks />
      </div>
    </div>
  );
};

export default Homepage;
