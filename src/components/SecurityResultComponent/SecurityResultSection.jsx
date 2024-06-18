import Image from "next/image";

const SecurityResultSection = ({ data }) => {
  return (
    <div className="flex flex-col relative md:w-full md:max-w-[1233px] md:mx-auto items-center justify-center rounded-[20px] py-[24px] bg-gradient-to-r from-[#FDF4C8] to-[#FFFDF27D] border-[1px] border-[#FFFDF27D] shadow-lg">
      <div className="flex flex-col items-center justify-center gap-[24px]">
        <p className="text-[35px] weight-[700px] font-medium leading-[41px]">
          {data?.securitySection?.title}
        </p>
        <div className="flex absolute left-[-70px] top-[10px] items-center justify-center">
            <Image src={data?.securitySection?.img} width={151} height={157} alt={data?.securitySection?.title} />
        </div>
        <div className="flex flex-row gap-[px]">
        {data?.securitySection?.details?.map((item, index) => (
          <div className="flex flex-row gap-[10px] md:w-[300px] items-start">
            <Image
              src={
                "https://assets.vakilsearch.com/live-images/ic-yellow-round-tick.svg"
              }
              width={26}
              height={26}
              alt={item?.title}
            />
            <p>{item?.content}</p>
          </div>
        ))}
         </div>
      </div>
    </div>
  );
};
export default SecurityResultSection;
