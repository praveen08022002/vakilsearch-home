import Image from "next/image";

const NewsSection = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto md:gap-[48px] md:mt-[100px] mt-[70px] md:max-w-[1330px]">
      <p className="md:text-[40px] text-[24px] text-center font-medium leading-[48px]">
        {data?.title}
      </p>
      <div className="flex flex-col items-center justify-center">
            <Image
              src={data?.webImg}
              width={data?.webWidth}
              height={data?.webHeight}
              alt={"image"}
            />
          </div>
    </div>
  );
};
export default NewsSection;
