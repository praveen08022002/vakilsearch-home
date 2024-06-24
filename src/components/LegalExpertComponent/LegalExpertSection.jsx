import Image from "next/image";
import Link from "next/link";

const LegalExpertSection = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="md:max-w-[984px] max-w-[342px] text-center md:text-[40px] text-[18px] md:leading-[46px] leading-[21px] md:weight-[600px] weight-[400px] md:font-bold text-[#022B50]">
        {data?.legalExperts?.content}
      </p>
      <div className="flex flex-row gap-[70px] md:max-w-[1333px] items-center md:mt-[50px] mt-[32px] p-[16px]">
        <Image
          src={data?.legalExperts?.img}
          width={500}
          height={500}
          alt="logo-banner"
          className="max-md:hidden"
        />
        <div className="flex flex-col justify-center gap-[12px]">
          {data?.legalExperts?.expertServices?.map((item, index) => (
            <Link target="_blank" href={item?.link ? item?.link : "/"}>
            <div
              key={index}
              className="flex flex-row md:opacity-50 items-center gap-[16px] p-[12px] border-[1px] rounded-[4px] cursor-pointer hover:opacity-100 hover:border-[#FFFFFF] hover:shadow-lg"
            >
              <Image
                src={item?.img}
                width={112}
                height={111}
                alt="logo-banner"
                className="md:w-[112px] md:h-[111px] w-[53px] h-[53px]" 
              />
              <div className="flex flex-row w-full items-center justify-between">
                <div className="flex flex-col justify-center gap-[4px]">
                  <p className="md:text-[24px] text-[16px] text-left font-medium weight-[600px] md:leading-[30px] leading-[18px]">
                    {item?.title}
                  </p>
                  <p className="md:text-[16px] text-[12px] weight-[400px] md:max-w-[306px] max-w-[212px] md:leading-[21px] leading-[14px]">
                    {item?.desc}
                  </p>
                </div>
                <div>
                  <Image
                    src={
                      "https://assets.vakilsearch.com/live-images/ic-right-arrow-black.svg"
                    }
                    width={12}
                    height={10}
                    alt={"arrow"}
                  />
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default LegalExpertSection;
