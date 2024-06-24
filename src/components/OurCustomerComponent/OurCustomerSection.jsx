import Image from "next/image";
import useIsMobile from "@/utils/useIsMobile";

const OurCustomerSection = ({ data }) => {
    const isMobile = useIsMobile();
    return (
        <div className="flex flex-col text-[#ffffff] py-[30px] md:py-[50px] md:mt-[40px]  md:w-full bg-[#022B50] items-center justify-center">
            <p className="md:text-[35px] text-[24px] weight-[700px] leading-[41px] font-bold">{data?.ourCustomers?.title}</p>
            <div className="flex md:flex-row flex-wrap md:gap-20 gap-[14px] max-md:max-w-[273px] items-center justify-center">
            {data?.ourCustomers?.customerList?.map((item, index) => (
                <div key={index} className="flex flex-col border-1 rounded-lg md:pt-[52px] pt-[32px]">
                    <Image src={item?.img} 
                    width={isMobile ? item?.mobileWidth : item?.webWidth} 
                    height={isMobile ?  item?.mobileHeight : item?.webHeight} 
                    alt={"logo"} />
                </div>
            ))}
            </div>
        </div>
    )
}
export default OurCustomerSection;