import Image from "next/image";
import Link from "next/link";
const ServiceSection = ({ data }) => {
  return (
    <div className="flex flex-row justify-center md:gap-[24px] gap-[18px] max-md:overflow-scroll">
      {data?.services?.map((item, index) => (
        <div
          key={index}
          className="flex flex-col w-[253px] bg-[#ffffff] rounded-lg p-[16px] border-[1px]"
        >
          <p className="text-[20px] md:h-[46px] font-bold leading-[23px]">
            {item?.title}
          </p>
          <p className="text-[16px] text-[#243A4F] font-normal py-[12px] leading-[18px] weight-[400]">
            {item?.desc}
          </p>
          <div>
            <Image
              src={item?.img}
              width={100}
              height={84}
              alt={item?.title}
              className="mt-[32px]"
            />
          </div>
          {item?.serviceList?.map((list, index) => (
            <Link target="_blank" href={list?.link ? list?.link : "/"}>
              <div
                key={index}
                className="mt-[12px] flex flex-row cursor-pointer items-center justify-between"
              >
                <p
                  key={index}
                  className="text-[11px] text-[#2E2E2E] text-left font-normal py-[12px] leading-[18px] weight-[400]"
                >
                  {list?.name}
                </p>
                <Image
                  src={
                    "https://assets.vakilsearch.com/live-images/ic-right-arrow-black.svg"
                  }
                  width={8}
                  height={4}
                  alt={item?.title}
                />
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};
export default ServiceSection;
