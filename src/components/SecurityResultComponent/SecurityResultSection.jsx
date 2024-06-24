import Image from "next/image";

const SecurityResultSection = ({ data }) => {
  return (
    <div className="flex flex-col relative md:max-w-[1200px] md:mx-auto max-md:m-[16px] max-md:mt-[50px] items-center justify-center rounded-[20px] py-[24px] bg-gradient-to-r from-[#FDF4C8] to-[#FFFDF27D] border-[1px] border-[#FFFDF27D] shadow-lg">
      <div className="flex flex-col items-center justify-center md:gap-[24px] md:pl-20 md:pr-10"> 
        <p className="md:text-[35px] text-[24px] max-md:text-center max-md:mt-[52px] max-lg:mt-[90px] md:font-bold font-medium md:leading-[41px] text-[#001D37]">
          {data?.securitySection?.title}
        </p>
        <div className="flex absolute lg:left-[-70px] lg:top-[10px] top-[-50px] items-center justify-center">
            <Image className="md:w-[151px] md:h-[157px] w-[112px] h-[112px]" src={data?.securitySection?.img} width={151} height={157} alt={data?.securitySection?.title} />
        </div>
        <div className="flex lg:flex-row flex-col md:gap-[30px] gap-[10px] max-md:p-[24px]">
        {data?.securitySection?.details?.map((item, index) => (
          <div className="flex flex-row gap-[10px] lg:w-[300px] items-start">
            <Image
              src={
                "https://assets.vakilsearch.com/live-images/ic-yellow-round-tick.svg"
              }
              width={26}
              height={26}
              alt={item?.title}
            />
            <p className="text-[#434A53] md:text-lg">{item?.content}</p>
          </div>
        ))}
         </div>
      </div>
    </div>
  );
};
export default SecurityResultSection;
