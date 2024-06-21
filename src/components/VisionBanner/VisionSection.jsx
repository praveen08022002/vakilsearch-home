import Image from "next/image";

const VisionSection = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto md:gap-[48px] md:mt-[100px] mt-[70px] md:max-w-[1330px] max-w-[308px]">
      <p className="md:text-[40px] text-[24px] text-center font-medium md:leading-[48px]">
        {data?.title}
      </p>
      {data?.desc && (
          <p className="md:text-[24px] max-md:pt-[12px] text-[16px] text-center font-light md:leading-[30px] text-[#434A53] max-w-[1069px]">
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
