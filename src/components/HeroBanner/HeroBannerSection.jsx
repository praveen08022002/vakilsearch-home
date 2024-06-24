import Image from "next/image";
import RatingAndReview from "./RatingAndReview";
import SearchView from "./SearchView";
import ServiceSection from "../ServiceComponent/ServiceSection";
import Link from "next/link";
const HeroBannerSection = ({ data }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col bg-[#022B50] relative items-center md:pt-[70px] pt-[40px] md:pb-[280px] max-md:h-[95vh] gap-[18px]">
        <RatingAndReview data={data} />
        <div className="md:mb-[64px] mb-[32px] flex flex-col items-center justify-center">
          <p className="text-white md:text-[60px] text-[32px] font-bold md:leading-[72px] leading-[37px] max-lg:text-center">
            India&apos;s <span className="text-[#FFC24F]">Top Rated </span>Legal
            Services Platform
          </p>
          <p className="text-white md:text-[24px] max-md:w-[300px] text-[16px] font-normal md:leading-8 leading-[18px] text-center mt-3">
            {data?.subTitle}
          </p>
        </div>
        <SearchView data={data} />
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 z-10">
          {data?.suggesstions?.map((item, index) => (
            <Link target="_blank" href={item.link}>
              <p className="text-[#FFFFFF] text-xs md:text-base bg-[#22384D] border-[#5E6E7C] border-[1px] rounded-xl px-4 py-1" key={index}>{item.name}</p>
            </Link>
          ))}
        </div>
        <Image
          className="absolute left-0 bottom-0 md:w-[443px] md:h-[449px] w-[223px] h-[223px]"
          src={
            "https://assets.vakilsearch.com/live-images/ic-zolvit-logo-gray.png"
          }
          width={443}
          height={449}
          alt="logo-banner"
        />
      </div>
      <div className="flex flex-row mt-[-40px] md:mt-[-189px] z-10 md:justify-center">
        <ServiceSection data={data} />
      </div>
    </div>
  );
};
export default HeroBannerSection;
