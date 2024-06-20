import Image from "next/image";
import parser from "html-react-parser";

const OurProductSection = ({ data }) => {
  return (
    <div className="flex flex-col py-[50px] w-full md:max-w-[1330px]  md:mt-[40px] md:mx-auto md:w-full items-center justify-center">
      <p className="text-[35px] weight-[700px] font-medium leading-[41px]">
        {data?.ourProducts?.title}
      </p>
      <p className="text-[24px] weight-[400px] text-[#284B6A] leading-[28px] py-[12px]">
        {data?.ourProducts?.desc}
      </p>
      <div className="flex flex-row gap-20 mt-[71px]">
        {data?.ourProducts?.productList?.map((item, index) => (
          <div key={index}
            className={`flex flex-col ${
              item?.isBlueBg ? "bg-[#022B50]" : "bg-[#F6F6F6]"
            } rounded-[30px] border-[1px] border-[#ffffff] shadow-2xl pt-[72px] px-[50px]`}
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
                className={`text-[40px] font-medium ${
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
                  } text-[16px] font-normal leading-[19px] weight-[400]`}
                >
                  {parser(detail?.content)}
                </p>
              </div>
            ))}
            {item?.isExplore ? (
              <div className="flex flex-row md:max-w-[161px] py-[16px] px-[22px] items-center justify-between bg-[#FED130] rounded-[30px]">
                <p className="text-[13px] font-normal weight-[500px] leading-[15px]">
                  EXPLORE NOW
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
                width={item?.webWidth}
                height={item?.webHeight}
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
