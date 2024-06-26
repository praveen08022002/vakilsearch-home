import Image from "next/image";
import Link from "next/link";
const ServiceSection = ({ data }) => {
  return (
    <div className="flex overflow-x-scroll lg:overflow-x-hidden">
      {data?.services?.map((item, index) => (
        <div
          key={index}
          className="flex flex-col  bg-[#ffffff] rounded-lg p-[16px] border-[1px] m-2"
        >
          <div className="!w-[200px] md:w-[53px] ">
            <div className="max-md:min-h-[210px]">
            <p className="text-[20px] md:h-[46px] font-bold leading-[23px]">
              {item?.title}
            </p>
            <p className="text-[16px] text-[#243A4F] font-normal py-[12px] leading-[18px]">
              {item?.desc}
            </p>
            <div>
              <Image
                src={item?.img}
                width={100}
                height={84}
                alt={item?.title}
                className="md:py-3 "
              />
            </div>
            </div>
            {item?.serviceList?.map((list, index) => (
              <Link target="_blank" href={list?.link}>
                <div
                  key={index}
                  className="md:mt-[12px] mt-[8px] flex flex-row cursor-pointer items-center justify-between"
                >
                  <p
                    key={index}
                    className="text-[11px] text-[#2E2E2E] text-left font-normal md:py-[12px] leading-[18px]"
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
        </div>
      ))}
    </div>
  );
};
export default ServiceSection;
