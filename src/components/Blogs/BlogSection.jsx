import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/link";

const BlogSection = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto md:gap-[48px] gap-[24px] md:mt-[100px] md:max-w-[1330px] px-6 lg:px-0">
      <p className="text-2xl  md:text-[40px] text-center font-medium leading-[48px]">
          Here are some related blog
      </p>
      <div className="w-full flex flex-col md:flex-row items-center justify-center md:gap-[150px] gap-[50px]">
        {data?.blogList?.map((item, index) => (
          <div key={index} className="flex flex-col max-md:gap-[12px]">
            {/* <img
              src={
                item?._embedded["wp:featuredmedia"][0]?.source_url ??
                "https://assets.vakilsearch.com/live-images/ic-oyo.svg"
              }
              // width={item?.webWidth}
              // height={item?.webHeight}
              alt={"blogs icon"}
            /> */}
            <div className="flex flex-col md:mt-[50px] md:gap-[12px]">
              <p className="text-xl md:text-[30px] text-left font-medium leading-[35px] py-4 md:py-0">
              {item?.title?.rendered}
              </p>
              <p className="text-sm md:text-[18px] text-left text-[#434A53] font-normal md:leading-[30px] max-w-[270px] md:max-w-[450px]">
              {parse(item?.excerpt?.rendered)}

              </p>
              {item?.underLineText && (
                <Link  href={`${item?.link}`} className="text-lg md:text-[18px] cursor-pointer text-left text-[#434A53] font-normal leading-[30px] underline pt-4 md:pt-0">
                   Read More
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BlogSection;
