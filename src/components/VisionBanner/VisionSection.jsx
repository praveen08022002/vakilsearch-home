import Image from "next/image";

const VisionSection = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto md:gap-[48px] gap-[24px] md:mt-[100px] md:max-w-[1330px] px-6 lg:px-0">
      <p className="text-2xl md:text-[40px] font-bold text-center max-sm:max-w-[308px]">
        {data?.title}
      </p>
      {data?.desc && (
          <p className="text-base md:text-[24px] text-center font-light md:leading-[30px] text-[#434A53] max-w-[1069px]">
          {data?.desc}
        </p>
      )}
      <div className="w-full flex md:flex-row flex-wrap items-center justify-center md:gap-[150px] gap-[33px] max-md:mt-[36px]">
        {data?.companyList?.map((item, index) => (
          <div key={index}>
            <Image
              src={item?.img}
              width={item?.webWidth}
              height={item?.webHeight}
              alt={"vision icon"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default VisionSection;
