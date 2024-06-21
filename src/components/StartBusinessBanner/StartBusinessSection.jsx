import { Button } from "@uber9/web-react-components";
import Image from "next/image";

const StartBusinessSection = ({ data }) => {
    return (
        <div className="flex flex-col relative w-full bg-[#022B50] items-start md:gap-[25px] md:py-[40px] py-[24px] lg:px-[15%] px-[24px] mt-[-120px] md:mt-[-40px]">
            <div className="flex flex-col md:gap-[25px] max-lg:max-w-[600px]">
            <p className="w-full md:max-w-[806px] md:text-[36px] text-[24px] text-left font-bold text-[#ffffff]">{data?.startBusinessSection?.title}</p>
            <p className="w-full md:max-w-[679px] md:text-[18px] text-[14px] text-left font-normal md:leading-[26px] text-[#ffffff] max-md:pt-[10px]">{data?.startBusinessSection?.desc}</p>
            <p className="max-w-[200px] max-md:max-w-[150px] md:text-xl text-[14px] md:py-4 p-2  bg-[#FCD209] max-md:my-[30px] rounded text-center font-medium cursor-pointer">{data?.startBusinessSection?.btnCta}</p>
            </div>
            <div className="absolute md:h-[320px] h-[132px] md:bottom-[-2%] bottom-[-1%] right-0">
            <Image src={data?.startBusinessSection?.img} width={200} height={140} alt={"icon"}
            className="md:w-[420px] md:h-[320px] w-[159px] h-[132px]"/>
       </div>
        </div>
    )
}
export default StartBusinessSection;