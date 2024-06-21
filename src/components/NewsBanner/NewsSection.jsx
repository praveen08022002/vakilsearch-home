import Image from "next/image";

const NewsSection = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto md:gap-[48px] gap-[24px] md:mt-[100px] md:max-w-[1330px]">
      <p className="text-[#022B50] text-2xl md:text-[40px] text-center font-medium leading-[48px]">
        {data?.title}
      </p>
      <div className="flex flex-col items-center justify-center">
        <Image
          src={data?.webImg}
          width={data?.webWidth}
          height={data?.webHeight}
          alt={"image"}
          className="max-md:hidden"
        />
        <Image
          src={data?.mobileImg}
          width={data?.mobileWidth}
          height={data?.mobileHeight}
          alt={"image"}
          className="md:hidden"
        />
      </div>
    </div>
  );
};
export default NewsSection;
