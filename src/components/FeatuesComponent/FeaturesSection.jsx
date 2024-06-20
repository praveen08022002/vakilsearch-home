import React from "react";
import FeaturesLeftFold from "./FeaturesLeftFold";
import FeaturesRightFold from "./FeaturesRightFold";
import Image from "next/image";

const FeaturesSection = (props) => {
  const { featuresSection } = props?.data;
  return (
    <div className="px-2 md:px-0 bg-[#F6F6F6] relative">
      <Image
        src={featuresSection?.featuresbackdroplogo}
        alt="Backdrop Logo"
        width={600}
        height={600}
        className="absolute bottom-0 right-0 max-md:hidden"
      ></Image>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center md:gap-x-[80px] gap-y-10 md:py-[150px] py-[50px]">
        <FeaturesLeftFold {...props} />
        <FeaturesRightFold {...props} />
      </div>
    </div>
  );
};

export default FeaturesSection;
