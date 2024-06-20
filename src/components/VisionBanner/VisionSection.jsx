import Image from "next/image";

const VisionSection = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto md:gap-[48px] md:mt-[100px] md:max-w-[1330px]">
      <p className="text-[40px] text-center font-medium leading-[48px]">
        {data?.title}
      </p>
      {data?.desc && (
          <p className="text-[24px] text-center font-light leading-[30px] text-[#434A53] max-w-[1069px]">
          {data?.desc}
        </p>
      )}
      <div className="w-full flex flex-row items-center justify-center md:gap-[150px]">
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
