import Image from "next/image";
import RatingAndReview from "./RatingAndReview";
import SearchView from "./SearchView";
import ServiceSection from "../ServiceComponent/ServiceSection";
const HeroBannerSection = ({ data }) => {
  return (
    <div className="flex flex-col">
    <div className="flex flex-col bg-[#022B50] relative items-center md:pt-[70px] pt-[40px] h-[95vh] gap-[18px]">
      <RatingAndReview data={data} />
      <div className="mb-[64px] flex flex-col items-center justify-center">
        <p className="text-white md:text-[60px] text-[32px] font-bold md:leading-[72px] leading-[37px] max-md:text-center">
          India&apos;s <span className="text-[#FFC24F]">Top Rated </span>Legal
          services platform
        </p>
        <p className="text-white md:text-[24px] max-md:w-[300px] text-[16px] font-normal md:leading-8 leading-[18px] text-center mt-3">
          {data?.subTitle}
        </p>
      </div>
      <SearchView data={data} />
      <Image
        className="absolute left-0 bottom-0 max-md:hidden"
        src={
          "https://assets.vakilsearch.com/live-images/ic-zolvit-logo-gray.png"
        }
        width={443}
        height={449}
        alt="logo-banner"
      />
    </div>
    <div className="flex absolute left-0 right-0 justify-center bottom-[-350px]">
    <ServiceSection data={data} />
    </div>
    </div>
  );
};
export default HeroBannerSection;
