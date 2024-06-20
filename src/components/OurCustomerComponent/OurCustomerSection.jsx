import Image from "next/image";

const OurCustomerSection = ({ data }) => {
    return (
        <div className="flex flex-col text-[#ffffff] py-[50px] md:mt-[40px]  md:w-full bg-[#022B50] items-center justify-center">
            <p className="text-[35px] weight-[700px] leading-[41px]">{data?.ourCustomers?.title}</p>
            <div className="flex flex-row gap-20">
            {data?.ourCustomers?.customerList?.map((item, index) => (
                <div key={index} className="flex flex-col border-1 rounded-lg pt-[72px]">
                    <Image src={item?.img} width={item?.webWidth} height={item?.webHeight} alt={item?.title} />
                   
                </div>
            ))}
            </div>
        </div>
    )
}
export default OurCustomerSection;