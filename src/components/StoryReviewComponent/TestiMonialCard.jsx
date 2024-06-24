import Image from "next/image";
import React from "react";

const TestiMonialCard = ({
  listItem,
  setCustomerData,
  customerData,
  viewModalOpen,
  setViewModalOpen,
}) => {
  const handleSeeJourney = () => {
    setCustomerData(listItem);
    setViewModalOpen(true);
  };
  return (
    <div
      className="border-[#231F20] md:gap-[20px] relative p-[14px]
     flex max-md:flex-col gap-[20px] rounded-[16px]"
    >
      <div
        className="flex flex-col gap-[20px] bg-[#022B50] border-[#231F20] md:max-w-[792px] max-w-[350px] md:justify-between
         md:rounded-[12px] md:p-[42px]
       md:border-[0.5px] rounded p-[24px] border-[0.5px]"
      >
        <div className="relative">
          <p className="italic md:text-[18px] text-[#ffffff] font-normal max-md:rounded">
            {listItem?.content}
          </p>
          <Image
            src="https://assets.vakilsearch.com/live-images/ic-white-quote.svg"
            width={22}
            height={32}
            alt="image"
            className="top-[-15px] left-0 absolute"
          />
        </div>
      </div>
      <div className=" w-full max-w-[350px] flex flex-row items-center lg:bg-[#E6EAEE] lg:border-[1px] lg:rounded">
        <Image
          src={listItem?.image}
          alt="image"
          width={115}
          height={130}
          className="max-md:rounded-[100%] md:rounded-md md:w-[157px] md:h-[179px]"
        />
        <div className="flex flex-col text-[#231F20] px-[24px]">
          <p className=" text-[16px] md:text-[18px] text-left font-semibold">
            {listItem?.name}
          </p>
          <p className="italic md:text-[14px] max-md:max-w-[130px] text-[12px] text-[#8F9397]">
            {listItem?.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestiMonialCard;
