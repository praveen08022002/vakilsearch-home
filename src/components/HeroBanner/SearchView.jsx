import Image from 'next/image';
const SearchView = ({data}) => {
    return (
        <div className="w-full flex flex-col items-center justify-center md:z-10">
            <div className="w-full md:max-w-[949px] max-w-[343px] mx-auto flex flex-row justify-between relative py-[16px] px-[24px] border border-white bg-white md:rounded-3xl rounded-[32px]">
                <input className="w-full text-lg text-blue-900 border-none outline-none" type="text" placeholder="Try “GST Registration”" />
                <Image src={"https://assets.vakilsearch.com/live-images/ic-search-blue.svg"} width={24} height={24} alt='searchIcon'/>
            </div>
            <div className="flex md:flex-row flex-wrap max-md:gap-[8px] items-center justify-center mt-6 space-x-3">
                {data?.suggessions?.map((item, index) => (
                    <p className="md:text-center py-[4px] px-[15px]  text-white text-[12px] md:text-[16px] md:px-6 md:py-1 text-center border border-[#5E6E7C] md:rounded-[12px] rounded-[12px]  cursor-pointer hover:bg-[#5E6E7C]" key={index}>{item?.name}</p>
                ))}
            </div>
        </div>
    );
};
export default SearchView;