import React from "react";
import Image from "next/image";

const FeaturesRightFold = (props) => {
  const { featuresSection } = props?.data;
  const { features } = props?.data.featuresSection;
  return (
    <div className="flex flex-col">
      <p className="text-2xl md:text-4xl font-semibold">
        {featuresSection?.title}
      </p>
      <div className="py-[30px] md:py-[60px] flex flex-col md:gap-[60px] gap-[24px]">
        {features.map((item, index) => {
          return (
            <div key={index} className="flex flex-row gap-x-4 md:gap-x-6 relative">
              <div className="flex md:items-center">
                <Image
                  src={item?.image}
                  alt="feature_image"
                  width={30}
                  height={30}
                  className="mx-auto w-[48px] h-[48px] md:w-[65px] md:h-[65px]"
                ></Image>
              </div>
              <div className="text-[#231F20] flex flex-col justify-center">
                <p className="text-lg md:text-2xl font-semibold pb-1">
                  {item?.title}
                </p>
                <p className="md:max-w-[560px] max-w-[255px] text-xs md:text-xl">
                  {item?.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturesRightFold;
