import React from "react";
import FeaturesLeftFold from "./FeaturesLeftFold";
import FeaturesRightFold from "./FeaturesRightFold";
import Image from "next/image";

const FeaturesSection = (props) => {
  const { featuresSection } = props?.data;
  return (
    <div className="px-4 md:px-0 bg-[#F6F6F6] relative">
      <Image
        src={featuresSection?.featuresbackdroplogo}
        alt="Backdrop Logo"
        width={640}
        height={640}
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
