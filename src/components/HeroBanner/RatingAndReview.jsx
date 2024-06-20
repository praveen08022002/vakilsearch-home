import Image from 'next/image';

const RatingAndReview = ({data}) => {
    return(
        <div className="max-md:w-[200px] flex md:flex-row flex-wrap items-center justify-center bg-[#022B50] md:gap-2">
        <Image className='md:w-[168px] md:h-[47px] w-[92px] h-[26px]' src={data?.userGrpImg} width={168} height={47} alt="user-image" />
        <Image className='md:w-[168px] md:h-[47px] w-[100px] h-[20px]' src={data?.ratingStarImg} width={155} height={31} alt="rating-image" />
        <p className="text-white md:text-2xl text-[16px] font-medium leading-8">{data?.rating}</p>
        <p className="text-white md:text-xl text-[16px] font-thin leading-7">{data?.reviews}</p>
      </div>
    );
}
export default RatingAndReview;