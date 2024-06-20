import React from "react";
import Image from "next/image";

const FeaturesLeftFold = (props) => {
  const { featuresSection } = props?.data;
  return (
    <div className="flex flex-col">
      <Image
        src={featuresSection?.metricsimg1}
        alt="feature_image"
        className="hidden lg:block mx-auto"
        width={600}
        height={600}
      ></Image>
      <Image
        src={featuresSection?.metricsimg2}
        alt="feature_image"
        className="lg:hidden mx-auto w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
        width={300}
        height={300}
      ></Image>
    </div>
  );
};

export default FeaturesLeftFold;
