import { Button } from "@uber9/web-react-components";
import Image from "next/image";

const StartBusinessSection = ({ data }) => {
    return (
        <div className="flex flex-col relative w-full bg-[#022B50] md:mt-[100px] items-start gap-[25px] py-[40px] px-[15%]">
            <p className="w-full max-w-[806px] text-[36px] text-left weight-[700px] leading-[48px] text-[#ffffff]">{data?.startBusinessSection?.title}</p>
            <p className="w-full max-w-[679px] text-[18px] text-left font-normal weight-[400px] leading-[26px] text-[#ffffff]">{data?.startBusinessSection?.desc}</p>
            <p className="w-full max-w-[200px] bg-[#FCD209] py-[16px] px-[40px] rounded text-center font-medium cursor-pointer">{data?.startBusinessSection?.btnCta}</p>
            <Image src={data?.startBusinessSection?.img} width={320} height={140} alt={"icon"}
            className="absolute top-[-40px] right-[100px] bottom-0" />
        </div>
    )
}
export default StartBusinessSection;