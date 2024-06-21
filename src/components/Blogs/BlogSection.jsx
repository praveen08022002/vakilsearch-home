import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/link";

const BlogSection = ({ data }) => {

  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto md:gap-[48px] md:mt-[100px] md:max-w-[1330px]">
      <p className="text-[40px] text-center font-medium leading-[48px]">
      Here are some related blog
      </p>
      <div className="w-full flex flex-row items-center justify-center md:gap-[150px]">
        {data?.map((item, index) => (
          <div key={index} className="flex flex-col">
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
              <p className="text-[30px] text-left font-medium leading-[35px]">
                {item?.title?.rendered}
              </p>
              <p className="text-[18px] text-left text-[#434A53] font-normal leading-[30px]">
                {parse(item?.excerpt?.rendered)}
              </p>
              {item?.underLineText && (
                <Link
                  href={`${item?.link}`}
                  className="text-[18px] cursor-pointer text-left text-[#434A53] font-normal leading-[30px] underline"
                >
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
