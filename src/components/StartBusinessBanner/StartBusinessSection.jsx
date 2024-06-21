import { Button } from "@uber9/web-react-components";
import Image from "next/image";

const StartBusinessSection = ({ data }) => {
    return (
        <div className="flex flex-col relative w-full bg-[#022B50] md:mt-[100px] items-start md:gap-[25px] md:py-[40px] py-[24px] md:px-[15%] px-[24px]">
            <div className="flex flex-col md:gap-[25px]">
            <p className="w-full md:max-w-[806px] md:text-[36px] text-[24px] text-left weight-[700px] md:leading-[48px] text-[#ffffff]">{data?.startBusinessSection?.title}</p>
            <p className="w-full md:max-w-[679px] md:text-[18px] text-[14px] text-left font-normal weight-[400px] md:leading-[26px] text-[#ffffff] max-md:pt-[10px]">{data?.startBusinessSection?.desc}</p>
            <p className="w-full md:max-w-[200px] max-w-[180px] bg-[#FCD209] py-[16px] px-[40px] max-md:mt-[60px] rounded text-center font-medium cursor-pointer">{data?.startBusinessSection?.btnCta}</p>
            </div>
            <div className="absolute md:top-[-25px] md:right-0 md:bottom-0 md:w-[620px] md:h-[320px] w-[159px] h-[132px] bottom-0 right-0">
            <Image src={data?.startBusinessSection?.img} width={320} height={140} alt={"icon"}
            className="md:w-[620px] md:h-[320px] w-[159px] h-[132px]"/>
       </div>
        </div>
    )
}
export default StartBusinessSection;