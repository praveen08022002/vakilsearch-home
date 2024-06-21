import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestiMonialCard from "./TestiMonialCard";
import Image from "next/image";

const BackArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="bg-[#D9D9D9] max-md:hidden w-fit hover:bg-[#022B50] p-[6px] h-fit cursor-pointer rounded-md"
    >
      <Image
        src="https://assets.vakilsearch.com/white-arrow.svg"
        width={20}
        height={20}
        alt="logo"
      />
    </div>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="bg-[#D9D9D9] w-fit max-md:hidden hover:bg-[#022B50] p-[6px] h-fit cursor-pointer rounded-md"
    >
      <Image
        src="https://assets.vakilsearch.com/white-arrow.svg"
        width={20}
        height={20}
        alt="logo"
        className="scale-x-[-1]"
      />
    </div>
  );
};

const NewTestimonial = (props) => {
  const { newTestimonial, investors } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [customerData, setCustomerData] = useState("");
  const length = newTestimonial?.list?.length;
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % length); // Loop back to the first div
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [activeIndex]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    beforeChange: (current, next) => setActiveIndex(next),
    afterChange: (current) => setActiveIndex(current),
    nextArrow: <NextArrow />,
    prevArrow: <BackArrow />,
  };
  return (
    <div className="flex flex-col md:max-w-[1300px] max-w-full mx-auto justify-center md:mt-[100px]">
      <p className="text-[22px] font-semibold md:text-[42px] text-center">
        {newTestimonial?.title}
      </p>
      {newTestimonial?.desc && (
          <p className="text-[16px] w-full font-light md:text-[24px] text-center text-[#606162]">
          {newTestimonial?.desc}
        </p>
      )}
      <div className="flex flex-col gap-[20px] md:mt-[50px] max-md:m-[16px]">
        <Slider style={{ display: "flex", alignItems: "center" }} {...settings}>
          {newTestimonial?.list?.map((listItem, listIndex) => {
            return (
              <div className="max-md:pt-[36px]" key={listIndex}>
                <TestiMonialCard
                  listItem={listItem}
                  key={listIndex}
                  setCustomerData={setCustomerData}
                  customerData={customerData}
                  viewModalOpen={viewModalOpen}
                  setViewModalOpen={setViewModalOpen}
                />
              </div>
            );
          })}
        </Slider>
        <div className="flex gap-[4px] w-full md:mx-auto md:max-w-[1090px] max-md:overflow-auto">
          {Array.from({ length: length }, (_, index) => (
            <div
              key={index}
              className={`w-full relative transition-all max-md:px-4 bg-[#CACED1]
                 h-1 border-b-[1px] border-[#CACED1] rounded-[12px] ${
                   activeIndex === index
                     ? `before:animate-timer before:w-full before:h-1 before:absolute 
                     before:top-0 before:left-0 before:bg-[#2b3641] before:rounded-[12px]`
                     : ""
                 }`}
            >
                <p className={`text-[16px] weight-[700px] md:leading-[18px] py-[14px] ${activeIndex === index ? "text-[#2b3641]" : "text-[#8F9397]"}`}>{newTestimonial?.list[index].service}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewTestimonial;