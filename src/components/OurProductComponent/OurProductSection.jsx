import Image from "next/image";
import parser from "html-react-parser";
import useIsMobile from "@/utils/useIsMobile";

const OurProductSection = ({ data }) => {
    const isMobile = useIsMobile();
  return (
    <div className="flex flex-col py-[50px] w-full md:max-w-[1200px] md:mt-[40px] md:mx-auto md:w-full items-center justify-center">
      <p className="md:text-[35px] text-[24px] font-bold leading-[41px] text-[#022B50]">
        {data?.ourProducts?.title}
      </p>
      <p className="md:text-[24px] text-[16px] text-center max-md:w-[303px] text-[#284B6A] md:leading-[28px] py-[12px]">
        {data?.ourProducts?.desc}
      </p>
      <div className="flex lg:flex-row flex-col md:gap-20 gap-[20px] md:mt-[71px] mt-[30px] max-lg:mx-[16px]">
        {data?.ourProducts?.productList?.map((item, index) => (
          <div key={index}
            className={`flex flex-col ${
              item?.isBlueBg ? "bg-[#022B50]" : "bg-[#F6F6F6]"
            } md:rounded-[30px] rounded-[8px] border-[1px] border-[#ffffff] shadow-2xl md:pt-[72px] pt-[32px] md:px-[50px] px-[20px]`}
          >
            <Image
              className="align-left"
              src={item?.logo}
              width={148}
              height={26}
              alt={item?.title}
            />
            <div className="flex flex-col mt-[24px]">
              <p
                className={`md:text-[40px] text-[20px] font-medium ${
                  item?.isBlueBg ? "text-[#ffffff]" : "text-[#022B50]"
                }`}
              >
                {item?.title}
              </p>
            </div>
            {item?.details?.map((detail, index) => (
              <div key={index} className="flex flex-row py-[22px] items-start gap-2">
                <Image
                  src={item?.tickIcon}
                  width={24}
                  height={24}
                  alt={detail?.title}
                />
                <p
                  className={`${
                    item?.isBlueBg ? "text-[#ffffff]" : "text-[#022B50]"
                  } md:text-[16px] text-[14px] font-normal leading-[19px] `}
                >
                  {parser(detail?.content)}
                </p>
              </div>
            ))}
            {item?.isExplore ? (
              <div className="flex flex-row max-w-[161px] py-[16px] px-[22px] items-center justify-between bg-[#FED130] rounded-[30px]" onClick={() => item?.link ? window.location.href = item?.link : ""}>
                <p className="text-[13px] font-normal  leading-[15px]">
                  Download Now
                </p>
                <Image
                  src={
                    "https://assets.vakilsearch.com/live-images/ic-right-arrow-black.svg"
                  }
                  width={8}
                  height={4}
                  alt={"arrow"}
                />
              </div>
            ) : (
                <div className="h-[35px]"></div>
            )}
            <div className="pt-[40px] flex absoluteitems-center justify-center">
              <Image
                src={item?.demoPic}
                width={isMobile ? item?.mobileWidth :item?.webWidth}
                height={isMobile ? item?.mobileHeight : item?.webHeight}
                alt={"demo-banner"}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OurProductSection;
