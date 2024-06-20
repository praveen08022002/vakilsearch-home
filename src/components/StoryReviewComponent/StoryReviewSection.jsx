const StoryReviewSection = ({ data }) => {
    return (
        <div className="flex flex-col relative md:w-full md:mt-[50px] md:max-w-[1233px] md:mx-auto items-center justify-center">
            <p className="text-[35px] font-medium weight-[700px] leading-[41px]">{data?.reviewSection?.title}</p>
            <p className="text-[23px] weight-[400px] text-[#606162] leading-[26px] py-[16px]">{data?.reviewSection?.desc}</p>
            <div className="flex flex-row w-full items-center overflow-scroll">
                {data?.reviewSection?.reviews?.map((item, index) => (
                    <div className="flex flex-row">
                        <div className="flex flex-col bg-[#022B50] border-[1px] border-[#022B50] rounded-[20px] w-full md-w-[792px]">
                            <p className="text-[54px] text-[#ffffff] font-bold">“</p>
                            <p className="text-[20px] text-[#ffffff] weight-[500px] text-[italic]">{item.review}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default StoryReviewSection;