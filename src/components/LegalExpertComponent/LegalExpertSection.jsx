import Image from "next/image";

const LegalExpertSection = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="md:max-w-[984px] text-center text-[40px] leading-[46px] weight-[600] font-bold text-[#022B50]">
        {data?.legalExperts?.content}
      </p>
      <div className="flex flex-row md:w-full md:max-w-[1333px] items-center justify-between mt-[50px] p-[16px]">
        <Image
          src={data?.legalExperts?.img}
          width={500}
          height={500}
          alt="logo-banner"
        />
        <div className="flex flex-col justify-center gap-[12px]">
          {data?.legalExperts?.expertServices?.map((item, index) => (
            <div key={index} className="flex flex-row opacity-50 items-left justify-between gap-[32px] p-[12px] border-[1px] rounded-[4px] cursor-pointer hover:opacity-100 hover:border-[#FFFFFF] hover:shadow-lg">
              <Image
                src={item?.img}
                width={112}
                height={111}
                alt="logo-banner"
              />
              <div className="flex flex-col justify-center gap-[4px]">
                <p className="text-[24px] text-left font-medium weight-[600px] leading-[30px]">
                  {item?.title}
                </p>
                <p className="text-[16px] weight-[400px] leading-[21px]">
                  {item?.desc}
                </p>
              </div>
              <Image
                src={
                  "https://assets.vakilsearch.com/live-images/ic-right-arrow-black.svg"
                }
                width={12}
                height={10}
                alt={"arrow"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default LegalExpertSection;
