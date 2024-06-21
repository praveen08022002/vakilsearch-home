import Image from 'next/image';

const RatingAndReview = ({data}) => {
    return(
        <div className="max-md:w-[200px] flex md:flex-row flex-wrap items-center  justify-center bg-[#022B50] md:gap-2 gap-1">
        <Image className='md:w-[160px] md:h-[50px] w-[90px] h-[26px]' src={data?.userGrpImg} width={150} height={47} alt="user-image" />
        <Image className='md:w-[160px] md:h-[35px] w-[100px] h-[20px]' src={data?.ratingStarImg} width={150} height={31} alt="rating-image" />
        <p className="text-white md:text-2xl text-[16px] font-medium leading-8">{data?.rating}</p>
        <p className="text-white md:text-xl text-[16px] font-thin leading-7">{data?.reviews}</p>
      </div>
    );
}
export default RatingAndReview;